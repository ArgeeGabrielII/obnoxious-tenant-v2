const jwt = require('jsonwebtoken');

// GCP: CloudFunctions - Generate Session Tokens
exports.generateToken = async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const user = { username: req.query.username || req.body.username };

    jwt.sign({user}, process.env.JWT_SECRET_KEY, {expiresIn: '1800'}, (err, token) => { //Token Expires in 30m (1800)
      if (err) { res.status(500).send({ status: 500, message: 'Error: ' + err }); }
      res.status(200).send({ token: token, msg: "Successfully Generated User Token" });
    });

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
