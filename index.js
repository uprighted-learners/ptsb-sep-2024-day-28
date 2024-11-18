// bring express into the file
const express = require('express');

// create an instance of express
const app = express();

// define a port value
const PORT = 8080;

// define a "HELLO WORLD" route
app.get("/", (request, response) => {
    response.send("Hello World");
})

// launch  the server
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});