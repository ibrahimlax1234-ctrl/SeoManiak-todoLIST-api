# SeoManiak-todoLIST-api
TEST TECHNIQUE SEOMANIAK – STAGIAIRES 2026

# Todo REST API

## Description
A simple RESTful API built with Node.js and Express that manages a Todo list in memory.

## Technologies
- Node.js
- Express
- JavaScript (CommonJS)

## Installation

npm install
npm start
npm dev ( for debuging)

## API Routes

GET /todos
GET /todos/:id
POST /todos
PUT /todos/:id
DELETE /todos/:id

## Example JSON

{
    "title": "Study Express",
    "completed" : "false",
}

## Project Structure

src/
    app.js
    server.js
    routes/todo.routes.js
    controllers/todo.controller.js
    data.js
