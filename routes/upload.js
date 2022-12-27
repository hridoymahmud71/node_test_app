var express = require('express');
const multer = require("multer");

const uploads = require('../utilities/uploads');
const chkuploads = multer().single('photo') 
var router = express.Router();


/*  */
// router.post('/photo',uploads.single("photo"), function(req, res) {
//   console.log('hello',req.file, req.body)
//   res.send('file uploaded');
// });

router.post('/photo', function(req, res) {

  chkuploads(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.send('A Multer error occurred when uploading.');
    } else if (err) {
      // An unknown error occurred when uploading.
      res.send('An unknown error occurred when uploading.');
    }

    console.log("what error :" ,err);

    // Everything went fine.
    res.send('Everything went fine.');
  })
});

module.exports = router;
