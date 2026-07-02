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

src/app.js
src/server.js
src/routes/todo.routes.js
src/controllers/todo.controller.js
src/data.js
# SeoManiak-todoLIST-api

TEST TECHNIQUE SEOMANIAK – STAGIAIRES 2026
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

- GET /todos

- GET /todos/:id

- POST /todos

- PUT /todos/:id

- DELETE /todos/:id

## Example JSON

{
    "title": "Study Express",
    "completed" : "false",
}

## Project Structure

- src/app.js

- src/server.js

- src/routes/todo.routes.js

- src/controllers/todo.controller.js

- src/data.js


TESTING THE ENDPOINTS using curl:
 
curl -X  METHOD http://localhost:3000/[endpoint] -H "Content-Type: application/json" -d 'JSON_DATA'

curl -i -X GET http://localhost:3000/

curl -i -X GET  http://localhost:3000/todos

curl -i -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"laundry"}'

curl -i -X GET http://localhost:3000/todos/0

curl -i -X PUT http://localhost:3000/todos/0 -H "Content-Type: application/json" -d '{"title":"laundry updated"}'

curl -i -X PUT http://localhost:3000/todos/0 -H "Content-Type: application/json" -d '{"completed":true}'

curl -i -X PUT http://localhost:3000/todos/0 -H "Content-Type: application/json" -d '{"title":"laundry updated twice","completed":true}'

curl -i -X DELETE http://localhost:3000/todos/0

curl -i -X GET http://localhost:3000/todos/999
