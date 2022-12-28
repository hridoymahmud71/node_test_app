var express = require("express");
const todoController = require("../controllers/todoControllers");
var router = express.Router();

/* CRUD below */

// get all
router.get("/", todoController.getAllTodo);

// get one by id
router.get("/:id", todoController.getATodo);

router.post("/", todoController.addATodo);

// post multiple todo
router.post("/multiple", todoController.addMultipleTodo);

// update one by id
router.put("/:id", todoController.updateATodo);

// delete one by id
router.delete("/:id", todoController.deleteATodo);

module.exports = router;
