const axios = require('axios');

// GCP: CloudFunctions - Insert User Account Identification File
exports.insertUserAccountIdentificationFile = async (req, res) => {
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

      const user_id = req.body.user_id || req.query.user_id;
      const id_path = req.body.id_path || req.query.id_path;
      const file_type_id = req.body.file_type_id || req.query.file_type_id;
      
      console.log(`[LOG] userAccount File: Payload: 
        ${user_id}, ${id_path}, ${file_type_id}`);

      const h = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const q = `
        mutation {
          insert_obnoxious_tenant_user_account_identification_list(
            objects: {
              identification_list_id: ${file_type_id}, 
              identification_path: "${id_path}", 
              status: "Pending", 
              user_account_id: ${user_id}}) {
            affected_rows
            returning {
              id
            }
          }
        }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
      const response = axRes.data.data.insert_obnoxious_tenant_user_account_identification_list;
      
      if(response.affected_rows === 1) {
        res.status(200).send({msg: 'User Identification File Successfully Inserted', id: response.returning[0].id});
      }
    }

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
