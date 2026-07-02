const s_app = require("./app");


s_app.listen(3000,'127.0.0.1', () =>{
        console.log(`Server has started successfully & listening on port 3000`);
});



//TESTING THE ENDPOINTS: 
//curl -X METHOD http://localhost:3000/[endpoint] -H "Content-Type: application/json" -d 'JSON_DATA'
/* 

curl -i -X GET http://localhost:3000/

curl -i -X GET  http://localhost:3000/todos


curl -i -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"laundry"}'
curl -i -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"cooking"}'
curl -i -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"cleaning"}'
curl -i -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"shopping"}'

curl -i -X GET http://localhost:3000/todos/0
curl -i -X GET http://localhost:3000/todos/1
curl -i -X GET http://localhost:3000/todos/2
curl -i -X GET http://localhost:3000/todos/3

curl -i -X PUT http://localhost:3000/todos/0 -H "Content-Type: application/json" -d '{"title":"sleeping updated"}'
curl -i -X PUT http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"completed":true}'
curl -i -X PUT http://localhost:3000/todos/2 -H "Content-Type: application/json" -d '{"title":"cooking updated","completed":true}'

curl -i -X DELETE http://localhost:3000/todos/3
curl -i -X DELETE http://localhost:3000/todos/4
curl -i -X GET http://localhost:3000/todos/3



curl -i -X GET http://localhost:3000/todos/999

curl -i -X PUT http://localhost:3000/todos/0 -H "Content-Type: application/json" -d '{"title":"Buy bread","completed":true}'

*/