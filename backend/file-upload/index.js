const { Storage } = require('@google-cloud/storage');
const moment = require('moment-timezone');
const path = require('path');
const os = require('os');
const fs = require('fs');

// Node.js doesn't have a built-in multipart/form-data parsing library.
// Instead, we can use the 'busboy' library from NPM to parse these requests.
const Busboy = require('busboy');
const storage = new Storage();

exports.fileUpload = async (req, res) => {
  // This handles PreFlight Requests
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const busboy = new Busboy({headers: req.headers});
    const tmpdir = os.tmpdir();
    const fields = {}; // This object will accumulate all the fields, keyed by their name
    const uploads = {}; // This object will accumulate all the uploaded files, keyed by their name.

    let name = '';

    // This code will process each non-file field in the form.
    busboy.on('field', (fieldname, val) => { fields[fieldname] = val; });


    // This code will process each file uploaded.
    const fileWrites = [];
    busboy.on('file', (fieldname, file, filename) => {
      // Note: os.tmpdir() points to an in-memory file system on GCF
      // Thus, any files in it must fit in the instance's memory.
      const filepath = path.join(tmpdir, filename);
      uploads[fieldname] = filepath;

      const writeStream = fs.createWriteStream(filepath);
      file.pipe(writeStream);

      // File was processed by Busboy; wait for it to be written.
      // Note: GCF may not persist saved files across invocations.
      // Persistent files must be kept in other locations (such as Cloud Storage buckets).
      const promise = new Promise((resolve, reject) => {
        file.on('end', () => writeStream.end());
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });
      fileWrites.push(promise);
    });

    
    // Triggered once all uploaded files are processed by Busboy.
    // We still need to wait for the disk writes (saves) to complete.
    busboy.on('finish', async () => {
      await Promise.all(fileWrites);

      // Process Files to Upload in GCS
      for (const file in uploads) {

        // Set file_path and name.
        const fileExt = uploads.filename.split(".").pop();
        name = `${fields.file_type}/${fields.user_id}/${moment().tz("Asia/Manila").format('YYYYMMDDHHmmssSSSSS')}.${fileExt}`;
        console.log(`[LOG] File Path and Name: ${name}`);

        // Upload File to Google Cloud Storage
        await storage.bucket(process.env.GCP_BUCKET_NAME)
          .upload(uploads[file], {
            destination: name
          });
        
        // Make File Public
        await storage.bucket(process.env.GCP_BUCKET_NAME)
          .file(name).makePublic();

        fs.unlinkSync(uploads[file]);
      }
      res.status(200).send({ msg: 'File Successfully Saved', path: name });
    });

    busboy.end(req.rawBody);
  }
};
