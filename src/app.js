const express = require("express");
const app = express();

app.use(express.json());

app.use(require("./routes/todo.routes"));

app.get("/", (req, res) => { 
    res.send("Todo API: GET /todos, GET /todos/:id, POST /todos, PUT /todos/:id, DELETE /todos/:id");
});

module.exports = app;
