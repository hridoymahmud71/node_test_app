var express = require('express');
const uploads = require('../bin/utilities/uploads');
var router = express.Router();
var upload  = uploads

/* GET users listing. */
router.post('/upload/photo',upload.single("photo"), function(req, res) {
  res.send('file uploaded');
});

module.exports = router;
