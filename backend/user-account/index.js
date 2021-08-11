const axios = require('axios');

// GCP: CloudFunctions - Handles User Account Get / Insert / Update
exports.userAccount = async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const payload = req.body || req.query;
    console.log(`[LOG] userAccount: Payload: ${JSON.stringify(payload)}`);

    switch (payload.action) {
      case "INSERT":
        break;
      case "UPDATE":
        break;
      default:
        break;
    }

  //   const gQL = `
  //   query getMasterList {
  //     obnoxious_tenant_country_list {
  //       country_name
  //       iso_code
  //       country_code
  //     }
  //     obnoxious_tenant_identification_list {
  //       id
  //       id_code
  //       identification_name
  //     }
  //   }
  // `;

  // const gQL_headers = {
  //   'content-type': 'application/json',
  //   'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
  // };

  const axRes = await axios.post(process.env.GRAPHQL_ENDPOINT, { query: gQL_Login }, { headers: gQL_headers });
  const master_data = axRes.data.data;

  res.status(200).send(JSON.stringify(master_data));

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
