const axios = require('axios');

// GCP: CloudFunctions - Get User Profile Identification List
exports.getUserAccountIdentificationList = async (req, res) => {
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

      console.log(`[LOG] userAccount: Payload: ${req.body || req.query}`);

      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

      const user_id = req.body.user_id || req.query.user_id;
      console.log(`[LOG] userAccount: Payload: ${JSON.stringify(user_id)}`);

      const h = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const q = `
        query getUserAccountIdentificationList {
          obnoxious_tenant_user_account_identification_list(
            where: {
              user_account_id: {_eq: ${user_id}}}) {
            id
            identification_path
            status
            identification_list {
              id
              identification_name
            }
          }
        }
      `;

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
      const response = axRes.data.data;

      res.status(200).send(JSON.stringify(response));
    }
  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
