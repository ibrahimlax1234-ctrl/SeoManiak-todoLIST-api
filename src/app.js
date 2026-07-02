const express = require("express");
const app = express();

app.use(express.json());

app.use(require("./routes/todo.routes"));

app.get("/", (req, res) => {
    res.json({
        name: "Todo REST API",
        description: "Simple RESTful API for managing todos.",
        endpoints: {
            "GET /todos": "Retrieve all todos",
            "GET /todos/:id": "Retrieve a todo by id",
            "POST /todos": "Create a new todo",
            "PUT /todos/:id": "Update an existing todo",
            "DELETE /todos/:id": "Delete a todo"
        }
    });
});

module.exports = app;
