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
          insert_skilled_worker_user_account(
            objects: {
              first_name: "${first_name}", 
              last_name: "${last_name}", 
              email_address: "${email_address}", 
              username: "${username}"}) {
            returning {
              id
            }
            affected_rows
          }
        }
      `;

      // Save User Account Data
      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
      const response = axRes.data.data.insert_skilled_worker_user_account;
      console.log(`[LOG] Skilled Worker User Account Response: ${response}`);

      // Encrypt Password
      const encryptData = await axios.post(process.env.CRYPT, { input_data: password, type_data: "E" });
      console.log(`decryptData: ${JSON.stringify(encryptData.data)}`);
      
      if(response.affected_rows === 1) {
        const query = `
          mutation insertUserAccountAuthenticationnDetails {
            insert_skilled_worker_user_authentication(
              objects: {
                user_id: ${response.returning[0].id}, 
                password: "${encryptData.data.data}"}) {
              returning {
                id
              }
              affected_rows
            }
          }
        `;

        // Save User Account Authentication Data
        await axios.post(process.env.GRAPHQL_ENDPOINT, { query: query }, { headers: h });

        console.log(`[RETURN] {msg: 'User Account Successfully Inserted', id: ${response.returning[0].id}}`);
        res.status(200).send({msg: 'User Account Successfully Inserted', id: response.returning[0].id});
      }
    }

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
