var express = require("express");
const todoController = require("../controllers/todoControllers");
var router = express.Router();
const isAuthenticated = require("./../middlewares/isAuthenticated");

/* CRUD below */

// get all
router.get("/", todoController.getAllTodo);

// get active todos
router.get("/active", todoController.getActiveTodos);

// get todos where title has "js" in it
router.get("/js", todoController.getTodosByJs);

// get todos by specific language
router.get("/language/:lang", todoController.getTodosByLanguage);

// get one by id
router.get("/:id", todoController.getATodo);

router.post("/",isAuthenticated, todoController.addATodo);

// post multiple todo
router.post("/multiple", todoController.addMultipleTodo);

// update one by id
router.put("/:id", todoController.updateATodo);

// delete one by id
router.delete("/:id", todoController.deleteATodo);

module.exports = router;
