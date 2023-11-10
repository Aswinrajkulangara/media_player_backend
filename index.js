// import json-server library in index.js
const jsonServer = require('json-server')//require used to import

// create server using json library

 const mediaPlayerServer = jsonServer.create()  // create used to create server

//  to establish connection between db.json and index.js

// create a path to db.json

const router = jsonServer.router('db.json')

// to communicate between js and json

// middleware to convert js into json

const middleware = jsonServer.defaults()

// connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// json also runs on 3000 port by default so our react also runs on same port so to avoid clashing  
// setting port for json server
const port =5000 || process.env.PORT   
    // if we host on servers and the port that we given is already in use  so for changing the port we use process.env.PORT


// to monitor our port

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the requesst`);
})



