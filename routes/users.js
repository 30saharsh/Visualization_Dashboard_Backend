var mongoose = require("mongoose");
require("dotenv").config({path:"./.env"});

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);


var userSchema = mongoose.Schema({
  Data:Array,
})


module.exports = mongoose.model("users" , userSchema);