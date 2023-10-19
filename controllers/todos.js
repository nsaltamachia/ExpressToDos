const Todo = require("../models/todo")

// controllers/todos.js
module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done
  Todo.update(req.params.id, req.body),
    res.redirect(`/todos/${req.params.id}`);
}

function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/edit", {
    title: "Edit To-Do",
    todo,
  });
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/todos");
}

function newTodo(req, res) {
  res.render("todos/new", { title: "New Todo" })
}
function create(req, res) {
  console.log(req.body);
  // Models are responsible for CRUDing the data
  Todo.create(req.body);
  // Always do a redirect when data had been changed
  res.redirect("/todos");
}

function index(req, res) {
   res.render('todos/index', {
     todos: Todo.getAll(),
     title: "All To-Dos",
   });
};

function show(req, res) {
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
    title: "To-Do Details",
  });
    
}
