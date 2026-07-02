

let todos = require("../data");

function postTodos(req, res)
{
    const newTodo = {
        id: todos.length,
        title: req.body.title,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
}

function getTodos(req, res)
{
    res.json(todos);
}

function getTodoById(req, res)
{
    const id = parseInt(req.params.id);

    if (id < 0 || id >= todos.length)
        return res.status(404).json({ error: "Todo not found" });

    res.json(todos[id]);
}


function updateTodoById(req, res)
{
    const id = parseInt(req.params.id);

    if (id < 0 || id >= todos.length)
        return res.status(404).json({ error: "Todo not found" });

    if (req.body.title !== undefined)
        todos[id].title = req.body.title;

    if (req.body.completed !== undefined)
        todos[id].completed = req.body.completed;

    res.json(todos[id]);
}



function deleteTodoById(req, res)
{
    const id = parseInt(req.params.id);

    if (id < 0 || id >= todos.length)
        return res.status(404).json({ error: "Todo not found" });

    const deletedTodo = todos[id];

    todos.splice(id, 1);

    res.json(deletedTodo);
}



module.exports = {
    postTodos,
    getTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById
};