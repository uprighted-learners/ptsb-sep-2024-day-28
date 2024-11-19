// bring express into the file
const express = require('express');

// create an instance of express
const app = express();

// parse the body of your request
app.use(express.json());

// define a port value
const PORT = 8080;

// create a "users" array
const users = [
    {
        id: 0,
        name: "John",
        age: 25,
        job: "Developer",
        numberOfDucksOwned: 10
    },
    {
        id: 1,
        name: "Jane",
        age: 30,
        job: "Designer",
        numberOfDucksOwned: 2
    },
    {
        id: 2,
        name: "Bob",
        age: 35,
        job: "Project Manager",
        numberOfDucksOwned: 5
    }
]

// GET - /api/users - get all users
app.get("/api/users", (req, res) => {
    res.json(users)
})

// GET - /api/users/:id - get a user by id
app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);
    if (!user) {
        res.status(404).json({ message: "User not found" })
    }
    res.json(user);
})

// GET - /api/users/name/:name - get a user by name
app.get("/api/users/name/:name", (req, res) => {
    const userName = req.params.name;
    const user = users.find(user => user.name == userName);
    if (!user) {
        res.status(404).json({ message: "User not found" })
    }
    res.json(user);
})

// POST - /api/users - create a new user
app.post("/api/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(users);
})

// PUT - /api/users/:id - update a user by id
app.put("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const userIndex = users.findIndex(user => user.id == userId);
    if (userIndex === -1) {
        res.status(404).json({ message: "User not found" })
    }
    users[userIndex] = updatedUser;
    res.json(users);
});

// DELETE - /api/users/:id - delete a user by id
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id == userId);
    if (userIndex === -1) {
        res.status(404).json({ message: "User not found" })
    }
    users.splice(userIndex, 1);
    res.json(users);
});

// define a "HELLO WORLD" route
app.get("/hello-world", (request, response) => {
    response.send("Hello World - I am alive!");
})

// launch  the server
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});