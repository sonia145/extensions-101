/* Express Step 1: Creating an express application */
// requires express.js application  
var express = require("express");
//creates the app by calling express
var app = express();
//set port 
var port = 3000;

/* Express Step 2: Start Server */
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

/* Mongoose Step 1: Import mongoose */
const mongoose = require("mongoose");

/* Mongoose Step 2: Connecting to Mongoose */
mongoose.connect("mongodb://localhost:27017/WYR-test", {useNewUrlParser: true}); 

/* Mongoose Step 3: Define Model */
var Question = mongoose.model("Question", {
    optionA: String,
    optionB: String
});





