var express = require("express");
const todoController = require("../controllers/todoControllers");
var router = express.Router();
const Todo = require("./../models/Todo");

/* CRUD below */

// get all
router.get("/", async (req, res) => {
  res.send("respond with a resource");
});

// get one by id
router.get("/:id", async (req, res) => {
  res.send("respond with a resource");
});

router.post("/", todoController.addATodo);

// post multiple todo
router.post("/multiple", todoController.addMultipleTodo);

// update one by id
router.put("/:id", async (req, res) => {
  res.send("respond with a resource");
});

// delete one by id
router.delete("/:id", async (req, res) => {
  res.send("respond with a resource");
});

module.exports = router;
