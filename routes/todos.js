var express = require('express');
var router = express.Router();
var todosCtrl = require("../controllers/todos");

// All actual paths start with "/todos"


// GET / todos
router.get("/", todosCtrl.index);
// get/todos/new   <--- define before Show route
router.get("/new", todosCtrl.new);

// GET / todos/:id
router.get("/:id", todosCtrl.show);
// POST/todos
router.post("/", todosCtrl.create);


module.exports = router;
