const express = require("express");
const mongoose = require("mongoose");
const app = express();

//middleware
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// Connect to Database
mongoose.connect("mongodb://localhost:27017/Tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongo Database has been connected");
});



const PORT = process.env.PORT || 3003

// Listening to Port
app.listen(PORT, ()=>{
    console.log("Listening to PORT " + PORT )
});