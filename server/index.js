require('dotenv').config(); // to use the environment variables
const express = require("express"); // to create the server 
const mongoose = require("mongoose"); // to connect to the database 
const cors = require("cors"); // to allow cross origin requests
const routes = require("./routes/tasks.js"); // importing the routes
const app = express(); // creating an express app
const bodyParser = require("body-parser"); // to parse the body of the request

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

// Connecting to the database and starting the server
mongoose.connect(process.env.clusterURL, {useNewUrlParser: true})
            .then(()=> app.listen( process.env.PORT ||"1000",() => console.log("DB CONNECTED AND SERVER RUNNING")))
            .catch( err => console.log(err.message)); 

// Routes
app.use("/", routes);
