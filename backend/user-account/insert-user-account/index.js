const axios = require('axios');

// GCP: CloudFunctions - Get User Profile
exports.insertUserAccountDetails = async (req, res) => {
  try {
    console.log(`[LOG] userAccount: Payload: ${req.body || req.query}`);

    // This handles PreFlight Requests
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET, POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {

      const first_name = req.body.first_name || req.query.first_name;
      const last_name = req.body.last_name || req.query.last_name;
      const email_address = req.body.email_address || req.query.email_address;
      const username = req.body.username || req.query.username;
      const password = req.body.password || req.query.password;
      
      console.log(`[LOG] userAccount: Payload: ${first_name}, ${last_name}, ${email_address}, ${username}, ${password}`);

      const h = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const q = `
      mutation insertUserAccountDetails {
        insert_obnoxious_tenant_user_account(
          objects: {
            first_name: "${first_name}", 
            last_name: "${last_name}", 
            email_address: "${email_address}",
            username: "${username}", 
            password: "${password}"}) {
          returning {
            id
          }
          affected_rows
        }
      }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
      const response = axRes.data.data.insert_obnoxious_tenant_user_account;
      
      if(response.affected_rows === 1) {
        res.status(200).send({msg: 'User Profile Successfully Inserted', id: response.returning[0].id});
      }
    }

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
