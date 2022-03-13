// GCP: CloudFunctions - Email Validator
exports.emailValidator = async (req, res) => {
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

      const email_address = req.body.email_address;
      console.log(`[LOG] emailValidator : Payload : { "email_address": "${email_address}" }`);

      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      if (!email_address) { res.status(200).send({"valid": false}); }

      var valid = emailRegex.test(email_address);
      if(!valid) { res.status(200).send({"valid": false}); }

      res.status(200).send({"valid": true}); 
    }
  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
