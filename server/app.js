const express = require("express"); // to create the server 
const app = express(); // creating an express app
const cors = require("cors"); // to allow cross origin requests
const routes = require("./routes/tasks.js"); // importing the routes
const bodyParser = require("body-parser"); // to parse the body of the request

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

// Routes
app.use("/", routes);

module.exports = app;