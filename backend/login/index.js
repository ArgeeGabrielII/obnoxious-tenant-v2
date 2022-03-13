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

      const user_account = req.body.user_account;
      const password = req.body.password;
      console.log(`[LOG] checkLogin : Payload : { "user_account": "${user_account}", "password": "${password}" }`);

      const gQL_headers = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const gQL_Login = `
        query getLoginDetails {
          skilled_worker_user_account(
            where: {
              _or: [
                {username: {_eq: "${user_account}"}}, 
                {email_address: {_eq: "${user_account}"}}]}) {
            id
            username
            email_address
            first_name
            last_name
            image_path
            isActive
            gender
            role_list {
              roles
            }
            user_authentication {
              password
            }
          }
        }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: gQL_Login }, { headers: gQL_headers });
      const response = axRes.data.data.skilled_worker_user_account;
      console.log(`axRes: ${JSON.stringify(response)}`);

      const decryptData = await axios.post(process.env.CRYPT, { input_data: response[0].user_authentication[0].password, type_data: "D" });
      console.log(`decryptData: ${JSON.stringify(decryptData.data)}`);

      if(decryptData.data.data === password){
        console.log(`${user_account} credentials is Valid`);
        response[0].valid = true;
        delete response[0].user_authentication;

        res.status(200).send(JSON.stringify(response[0]));
      }else {
        res.status(200).send({ valid: false, message: "User Credentials is not valid." });
      }
    }

  } catch (e) {
    const errorMsg = { valid: false, status: 500, message: 'Error: ' + e }
    console.log(e);

    res.status(500).send(JSON.stringify(errorMsg));

  }
};
