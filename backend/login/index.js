const axios = require('axios');

// GCP: CloudFunctions - Checks if Login Details are Valid.
exports.checkLogin = async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const username = req.query.username || req.body.username;
    const password = req.query.password || req.body.password;
    console.log(`[LOG] checkLogin : Payload : { "username": "${username}", "password": "${password}" }`);

    const gQL_Login = `
      query getLoginDetails {
        obnoxious_tenant_user_account(where: {username: {_eq: "${username}"}, password: {_eq: "${password}"}}) {
          id
          username
          role_list {
            id
            roles
          }
        }
      }
    `;

    const gQL_headers = {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
    };

    const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: gQL_Login }, { headers: gQL_headers });
    const response = axRes.data.data.obnoxious_tenant_user_account;

    if(response[0]) {
      console.log(`${username} credentials is Valid`);
      response[0].valid = true;
      res.status(200).send(JSON.stringify(response[0]));
    } else {
      res.status(200).send({ valid: false, message: "Username and Password is not valid." });
    }

  } catch (e) {
    const errorMsg = { valid: false, status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));

  }
};
