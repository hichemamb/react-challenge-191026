const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
   projectId: 'react-challenge-hetic',
   keyFilename: 'react-challenge-hetic.json'
});

const bucket = storage.bucket('react-challenge-hetic.appspot.com');

exports.setPicture = (req, res) => {

   const {picture} = req.files;

   if (!picture || Object.keys(picture).length === 0) {
      return res.status(400).send('No files were uploaded.');
   } else {
      const fileName = picture.name;
      const pictureFile = bucket.file(fileName);

      const streamImage = pictureFile.createWriteStream({
         metadata: {
            contentType: picture.mimetype
         },
         public: true
      });

      streamImage.end(picture.data);
      res.json(`https://storage.googleapis.com/${bucket.name}/${fileName}`)
   }
};