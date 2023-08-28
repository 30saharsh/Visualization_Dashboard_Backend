var express = require('express');
var router = express.Router();
var cors = require("cors");
var userModel = require("./users");


router.use(cors());
router.get('/', function(req, res, next) {
 res.json({message:"Hello"});
});
router.get('/show', async function(req, res, next) {
  try {
    const data = await userModel.find();
res.json(data);
            
  } catch (error) {
    console.log(error);
    
  }


 });

module.exports = router;
