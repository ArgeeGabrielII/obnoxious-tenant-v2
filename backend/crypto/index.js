const axios = require('axios');
const CryptoJS = require('crypto-js');

// GCP: CloudFunctions - Encrypt | Decrypt Data Input
exports.crypto = async (req, res) => {
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

      const input_data = req.query.input_data || req.body.input_data;
      const type_data = req.query.type_data || req.body.type_data; //E | D
      console.log(`[LOG] crypto : Payload : { "input_data": "${input_data}", "type_data": "${type_data}" }`);

      const KEY = process.env.KEY;

      if(type_data === 'E'){
        // Encrypt
        const ciphertext = CryptoJS.AES.encrypt(input_data, KEY).toString();
        console.log(`{data: ${ciphertext}}`);
        res.status(200).send({data: ciphertext});
      }

      // Decrypt
      const bytes  = CryptoJS.AES.decrypt(input_data, KEY);
      const deciphertext = bytes.toString(CryptoJS.enc.Utf8);
      res.status(200).send({data: deciphertext});
    }
  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));

  }
};
