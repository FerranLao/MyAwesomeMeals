const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
 if(req.user){
  if(!req.user.active){
    res.render("index",{error:"Account not verified"})
  }}
  res.render('index');
});

module.exports = router;
