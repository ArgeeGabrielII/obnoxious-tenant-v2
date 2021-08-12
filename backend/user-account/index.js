const axios = require('axios');

// GCP: CloudFunctions - Handles User Account Get / Insert / Update
exports.userAccount = async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const payload = req.body || req.query;
    console.log(`[LOG] userAccount: Payload: ${JSON.stringify(payload)}`);

    const h = {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
    };

    switch (payload.action) {
      case "INSERT":
        break;
      case "UPDATE":
        break;
      default: {
        const q = `
          query getUserAccountDetails {
            obnoxious_tenant_user_account(where: {id: {_eq: ${payload.id}}, active: {_eq: true}}) {
              id
              username
              first_name
              last_name
              email_address
              date_of_birth
              contact_number
              nationality
              address_1
              address_2
              country_code
              user_account_identification_lists {
                id
                identification_list_id
                identification_path
              }
            }
          }
        `;

        const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
        res.status(200).send(JSON.stringify(axRes.data.data));

      } break;
    }

  

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
