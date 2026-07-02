const exp = require("express");

const routing = exp.Router();

const cont = require("../controllers/todo.controller");


let todos = require("../data");


routing.post("/todos", cont.postTodos);

routing.get("/todos", cont.getTodos);

routing.get("/todos/:id", cont.getTodoById);

routing.put("/todos/:id", cont.updateTodoById);

routing.delete("/todos/:id", cont.deleteTodoById);


module.exports = routing;