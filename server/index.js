require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/tasks.js");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin:'*'}));

mongoose.connect(process.env.clusterURL, {useNewUrlParser: true})
            .then(()=> app.listen("1000",() => console.log("DB CONNECTED AND SERVER RUNNING")))
            .catch( err => console.log(err.message)); 

app.use("/", routes);