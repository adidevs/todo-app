require('dotenv').config(); // to use the environment variables
const app = require("./app"); // to create the server
const mongoose = require("mongoose"); // to connect to the database 


// Connecting to the database and starting the server
mongoose.connect(process.env.clusterURL, {useNewUrlParser: true})
    .then(()=> {
        app.listen(process.env.PORT || "1000",() => console.log("DB CONNECTED AND SERVER RUNNING"))
    })
    .catch( err => {
        console.log(err.message)
    });


