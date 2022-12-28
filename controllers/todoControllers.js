const Todo = require("./../models/Todo");

const todoController = {
  async addATodo(req, res) {
    const newTodo = new Todo(req.body);

    await newTodo.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
        return;
      }

      res.status(200).json({
        message: "Saved Successfully",
      });
    });
  },

  async addMultipleTodo(req, res) {
    Todo.insertMany(req.body, (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
        return;
      }

      res.status(200).json({
        message: "Saved multiple Successfully",
      });
    });
  },
};

module.exports = todoController;
