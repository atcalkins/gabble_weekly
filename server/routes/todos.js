const express = require("express");
const router = express.Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.todo.findAll().then(todos => {
    res.render("todos/index", { todos: todos });
  });
});

router.get("/:id", (req, res) => {
  models.todo.findById(req.params.id).then(todo => {
    res.render("todos/show", { todo: todo });
  });
});

module.exports = router;
