const axios = require('axios');

// GCP: CloudFunctions - Update User Password
exports.updateUserPassword = async (req, res) => {
  try {
    console.log(`[LOG] userPassword: Payload: ${JSON.stringify(req.body || req.query)}`);

    // This handles PreFlight Requests
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET, POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {

      const user_id = req.body.user_id || req.query.user_id;
      const new_password = req.body.new_password || req.query.new_password;
      
      console.log(`[LOG] userAccount: Payload: 
        ${user_id}, ${new_password}`);

      const h = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const q = `
        mutation updateUserAccountPassword {
          update_obnoxious_tenant_user_account(
            where: {id: {_eq: ${user_id}}}, 
            _set: {password: "${new_password}"}) {
            affected_rows
          }
        }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
      const response = axRes.data.data.update_obnoxious_tenant_user_account;
      
      if(response.affected_rows === 1) {
        res.status(200).send({msg: 'Update Password Successful'});
      }
    }

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
