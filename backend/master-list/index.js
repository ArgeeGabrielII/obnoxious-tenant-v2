const axios = require('axios');

// GCP: CloudFunctions - Get All Master List
exports.getMasterList = async (req, res) => {
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

      console.log(`[LOG] getMasterList`);
      const gQL_MasterList = `
        query getMasterList {
          obnoxious_tenant_country_list {
            country_name
            iso_code
            country_code
          }
          obnoxious_tenant_identification_list {
            id
            id_code
            identification_name
          }
        }
      `;

      const gQL_headers = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: gQL_MasterList }, { headers: gQL_headers });
      const master_data = axRes.data.data;
      res.status(200).send(JSON.stringify(master_data));

    }
  } catch (e) {
    const errorMsg = { valid: false, status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));

  }
};
