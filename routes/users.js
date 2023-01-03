var express = require("express");
const userController = require("../controllers/userControllers");
var router = express.Router();

/* CRUD below */

// register a new user
router.post("/signup", userController.signUp);

// log user in to get a token
router.post("/login", userController.login);
// log user in to get a token
router.get("/all", userController.getAllUsers);




module.exports = router;
