const axios = require('axios');

// GCP: CloudFunctions - Checks if Login Details are Valid.
exports.checkLogin = async (req, res) => {
  try {
    // This handles PreFlight Requests
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {

      const email_address = req.query.email_address || req.body.email_address;
      const password = req.query.password || req.body.password;
      console.log(`[LOG] checkLogin : Payload : { "email_address": "${email_address}", "password": "${password}" }`);

      const gQL_headers = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const gQL_Login = `
        query getLoginDetails {
          obnoxious_tenant_user_account(
            where: {email_address: {_eq: "${email_address}"}}) {
              id
              username
              email_address
              password
              first_name
              last_name
              image_path
              role_list {
                id
                roles
              }
            }
        }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: gQL_Login }, { headers: gQL_headers });
      const response = axRes.data.data.obnoxious_tenant_user_account;
      console.log(`axRes: ${JSON.stringify(response)}`);

      const decryptData = await axios.post(process.env.CRYPT, { input_data: response[0].password, type_data: "D" });
      console.log(`decryptData: ${JSON.stringify(decryptData.data)}`);

      if(decryptData.data.data === password){
        console.log(`${response[0].username} credentials is Valid`);
        response[0].valid = true;
        delete response[0].password;

        res.status(200).send(JSON.stringify(response[0]));
      }else {
        res.status(200).send({ valid: false, message: "Email Address and Password is not valid." });
      }
    }

  } catch (e) {
    const errorMsg = { valid: false, status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));

  }
};
