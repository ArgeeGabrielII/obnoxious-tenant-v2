const axios = require('axios');

// GCP: CloudFunctions - Get User Profile
exports.getUserAccountDetails = async (req, res) => {
  try {
    console.log(`[LOG] userAccount: Payload: ${req.body || req.query}`);

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const id = req.body.id || req.query.id;
    console.log(`[LOG] userAccount: Payload: ${JSON.stringify(id)}`);

    const h = {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
    };

    const q = `
    query getUserAccountDetails {
      obnoxious_tenant_user_account(where: {id: {_eq: ${id}}, active: {_eq: true}}) {
        id
        username
        first_name
        last_name
        email_address
        date_of_birth
        contact_number
        gender
        address_1
        address_2
        country_code
        nationality
        image_path
        tier_list {
          id
          tier
          description
          image_path
        }
        role_list {
          id
          roles
        }
      }
    }
    `;

    const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: q }, { headers: h });
    const response = axRes.data.data;

    res.status(200).send(JSON.stringify(response));

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
