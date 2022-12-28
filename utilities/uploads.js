const multer = require("multer");
var path = require("path");


const UPLOADS_FOLDER =  path.join(__dirname, './../uploads');

const storage = multer.diskStorage(
    {
        destination:(req,file,cb) => {
            cb(null,UPLOADS_FOLDER);
        },

        filename:(req,file,cb) => {
            const  fileExt  = path.extname(file.originalname);
            const  fileName  = file.originalname.replace(fileExt,"").toLowerCase().split(" ").join("-")+ Date.now();
            cb(null,`${fileName}${fileExt}`)
        }
    }
)

var uploads = multer({storage:storage});

module.exports = uploads;

