const axios = require('axios');

// GCP: CloudFunctions - Get User Profile
exports.updateUserAccountDetails = async (req, res) => {
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

      const id = req.body.id || req.query.id;
      const first_name = req.body.first_name || req.query.first_name;
      const last_name = req.body.last_name || req.query.last_name;
      const date_of_birth = req.body.date_of_birth || req.query.date_of_birth;
      const contact_number = req.body.contact_number || req.query.contact_number;
      const gender = req.body.gender || req.query.gender;
      const address_1 = req.body.address_1 || req.query.address_1;
      const address_2 = req.body.address_2 || req.query.address_2;
      const country_code = req.body.country_code || req.query.country_code;
      const nationality = req.body.nationality || req.query.nationality;
      
      console.log(`[LOG] userAccount: Payload: 
        ${id}, ${first_name}, ${last_name}, ${date_of_birth}, ${contact_number}, ${gender}, ${address_1}, ${address_2}, ${country_code}, ${nationality}`);

      const h = {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.GRAPHQL_ENDPOINT_AUTH
      };

      const q = `
        mutation updateUserAccountDetails {
          update_obnoxious_tenant_user_account(
            where: {id: {_eq: ${id}}}, 
            _set: {
              first_name: "${first_name}", 
              last_name: "${last_name}", 
              date_of_birth: "${date_of_birth}", 
              contact_number: "${contact_number}", 
              gender: "${gender}", 
              address_1: "${address_1}", 
              address_2: "${address_2}", 
              country_code: "${country_code}", 
              nationality: "${nationality}"}) {
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
        res.status(200).send({msg: 'User Profile Successfully Updated', id: response.returning[0].id});
      }
    }

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
