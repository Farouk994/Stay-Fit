const express = require("express");
const mongoose = require("mongoose");
const app = express();

//middleware
// app.use(logger("dev"));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to Database
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/Tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongo Database has been connected");
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const PORT = process.env.PORT || 3003

// Listening to Port
app.listen(PORT, ()=>{
    console.log("Listening to PORT " + PORT )
});