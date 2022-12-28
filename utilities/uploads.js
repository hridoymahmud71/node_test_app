const multer = require("multer");


const UPLOADS_FOLDER = "../uploads/";
var uploads = multer({dest:UPLOADS_FOLDER});

module.exports = uploads;

