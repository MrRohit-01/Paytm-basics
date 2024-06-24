const express = require("express");
const router = express.Router()
const zod = require("zod")

router.get("/",(req,res)=>{
  res.json({
    msg:"this is index"
  })
})
router.get('/user', function (req, res) {
  res.json({
    msg:"this is user"
  })
  res.end();
});

router.get('/admin', function (req, res) {
  res.json({
    msg:"this is admin"
  })
  res.end();
});

router.get('/student', function (req, res) {
  res.json({
    msg:"this is student"
  })
  res.end();
});

module.exports = router