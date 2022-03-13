const axios = require('axios');

// GCP: CloudFunctions - Get User Profile
exports.updateUserAccountProfileImage = async (req, res) => {
  try {
    console.log(`[LOG] userAccount Profile: Payload: ${req.body || req.query}`);

    // This handles PreFlight Requests
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET, POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {

      const id = req.body.id || req.query.id;
      const image_path = req.body.image_path || req.query.image_path;
      
      console.log(`[LOG] userAccount Profile: Payload: 
        ${id}, ${image_path}`);

      const h = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const q = `
        mutation updateUserAccountImage {
          update_obnoxious_tenant_user_account(
            where: {id: {_eq: ${id}}}, 
            _set: {
              image_path: "${image_path}"}) {
            affected_rows
            returning {
              id
            }
          }
        }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
      const response = axRes.data.data.update_obnoxious_tenant_user_account;
      
      if(response.affected_rows === 1) {
        res.status(200).send({msg: 'User Profile Image Successfully Updated', id: response.returning[0].id});
      }
    }

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
