// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The path to your file to upload
// const filePath = 'path/to/your/file';

// The new ID for your GCS file
// const destFileName = 'your-new-file-name';

exports.fileUpload = async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    const storage = new Storage();

    const payload = req.body || req.query;
    console.log(`[LOG] userAccount: Payload: ${JSON.stringify(payload)}`);

    const response = await storage.bucket(process.env.GCP_BUCKET_NAME).upload(payload.filePath, {
      destination: payload.destFileName,
    });
  
    console.log(`${payload.filePath} uploaded to ${process.env.GCP_BUCKET_NAME}/${payload.destFileName}`);
    console.log(JSON.stringify(response));

  } catch (e) {
    const errorMsg = { status: 500, message: 'Error: ' + e }

    console.log(e);
    res.status(500).send(JSON.stringify(errorMsg));
  }
};
