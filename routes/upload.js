var express = require('express');

const uploads = require('../utilities/uploads');
var router = express.Router();


/*  */
router.post('/photo',uploads.single("photo"), function(req, res) {
  console.log('hello',uploads,req.file, req.body)
  res.send('file uploaded');
});

module.exports = router;
