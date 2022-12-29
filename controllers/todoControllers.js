const Todo = require("./../models/Todo");

const todoController = {
  async getATodo(req, res) {
    Todo.find({_id:req.params.id}, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
        return;
      }

      res.status(200).json({
        data: data,
      });
    });
  },

  async getActiveTodos(req, res) {
    const todo  = new Todo();
    todo.findActive()
      .select({
        _id: 0,
      })
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error",
          });
          return;
        }

        res.status(200).json({
          data: data,
        });
      });
  },

  async getTodosByJs(req, res) {
    
    Todo.findByJs()
      .select({
        _id: 0,
      })
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error",
          });
          return;
        }

        res.status(200).json({
          data: data,
        });
      });
  },

  async getTodosByLanguage(req, res) {
    
    Todo.find().byLanguage(req.params.lang)
      .select({
        _id: 0,
      })
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error",
          });
          return;
        }

        res.status(200).json({
          data: data,
        });
      });
  },
  

  async getAllTodo(req, res) {
    Todo.find({})
      .select({
        _id: 0,
      })
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error",
          });
          return;
        }

        res.status(200).json({
          data: data,
        });
      });
  },

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

  async updateATodo(req, res) {
    Todo.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          status: req.body.status,
        },
      },
      {
        new: true,
        useFindAndModify: true,
      },
      (err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error",
          });
          return;
        }

        res.status(200).json({
          message: "Updated !",
          data: data,
        });
      }
    );
  },
  async deleteATodo(req, res) {
    Todo.findByIdAndDelete({_id:req.params.id}, (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
        return;
      }

      res.status(200).json({
        message: "Deleted !",
      });
    });
  },
};

module.exports = todoController;
