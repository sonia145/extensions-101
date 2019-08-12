// Mongoose Step 1: Import mongoose 
const mongoose = require("mongoose");
// JWT Step 1: Import JWT Node.JS library
const jsonwebtoken = require('jsonwebtoken');

// Express Step 1: Creating an express application
// requires express.js application  
var express = require("express");
//creates the app by calling express
var app = express();
//set port 
var port = 3000;


// Express Step 2: Adding body parser to help parse the incoming request
var bodyParser = require('body-parser');
app.use(bodyParser.json());



// JWT Step 2: Get JWT Secret
const sec =" 7vdHyoD2F9NfWer4uGCayxQZ5seiQ2AF/90ZsD8acyY=";
const secret = Buffer.from(sec, 'base64');

// string constant 
const bearerPrefix = 'Bearer '; 


// no clue what this is for 
// CORS: security layer, allow to run external javascript 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  // Note that the origin of an extension iframe will be null
  // so the Access-Control-Allow-Origin has to be wildcard.
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Mongoose STEP 2: Connecting to Mongoose
mongoose.connect("mongodb://localhost:27017/WYR-test", {useNewUrlParser: true}); 

// Mongoose Step 3: Define Model
var Question = mongoose.model("Question", {
    userID: String,
    optionA: String,
    optionB: String
});


// Express STEP 4: Adding POST Route
// POST: create a new question record in database
app.post("/question", (req, res) => {
//create a new instance of the model we created & pass the user input
// Save Function that takes a JSON object and stores it in Database
  // mongoose returns a promise on a save to database
 // promise = what is returned when the save to DB completes (fail or complete)
 // .then segment = successful save
 console.log('in app question')
 //console.log(req.headers.authorization)
 const payload = verifyAndDecode(req.headers.authorization);
 const { channel_id: channelId, opaque_user_id: opaqueUserId } = payload;
 //console.log(payload.opaque_user_id)
 console.log(req.body)
 console.log(req.body.first)
 //console.log(req.data)
 //console.log(req.dataType)
 //console.log(req.data.first)
 var myData = new Question({
    userID: payload.opaque_user_id, 
    optionA: req.body.first, 
    optionB: req.body.second}); 
 myData.save(function (err) {
    console.log("value has been saved!")
  if (err) {
    console.error(error)
  }
    })
});



// Express STEP 3: Start Server 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});



// JWT Step 3: Verify
// Verify the header and the enclosed JWT.
function verifyAndDecode (header) {
  console.log("in verify")
  if (header.startsWith(bearerPrefix)) {
    try {
      const token = header.substring(bearerPrefix.length);
      return jsonwebtoken.verify(token, secret, { algorithms: ['HS256'] });
    }
    catch (ex) {
      return console.log("Invalid JWT")
    }
  }
}




