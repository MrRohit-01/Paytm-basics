const express = require("express");
const router = express.Router();
const User = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const authMiddleware = require("../middleware/authMiddleware");
const signUp = zod.object({
  email: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
const signIn = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
const updateSchema = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  password_hash: zod.string().optional()
});
const prodSchema = zod.string().min(5);
const firstSchema = zod.string().min(5);

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signUp.safeParse(body);
  if (!success) {
    res.json({
      msg: "Enter vaild details",
    });
    res.end();
  }
  const existUser = await User.findOne({ email: body.email });
  if (existUser) {
    res.json({
      msg: "email already exist",
    });
    res.end();
  } else {
    const newUser = new User({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
    });

    const hashedPassword = await newUser.createHash(body.password);

    newUser.password_hash = hashedPassword;

    await newUser.save();
    const token = jwt.sign({ username: body.email }, JWT_SECRET);
    return res.status(201).json({
      message: "User created successfully.",
      token,
    });
  }
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const { success } = signIn.safeParse(body);
  if (!success) {
    res.json({
      msg: "Enter vaild details",
    });
    res.end();
  }
  const user = await User.findOne({ email: body.email });
  if (!user) {
    res.json({
      msg: "email doesn't exist signup first",
    });
    res.end();
  } else {
    const hashedPassword = await user.validatePassword(body.password);

    if (hashedPassword) {
      const token = jwt.sign({ username: body.email }, JWT_SECRET);
      return res.status(201).json({
        token,
      });
    }
  }
});

router.put("/update", authMiddleware, async (req, res) => {
  const body = req.body;
  const { success } = updateSchema.safeParse(body);
  if (!success) {
    res.json({
      message: "Error while updating information",
    });
    req.end();
  }
  const email = req.email;
  try{

  
 const user = await User.findOne({email:email})
 if (body.firstName) user.firstName = body.firstName;
 if (body.lastName) user.lastName = body.lastName;
 if(body.password_hash){


  const password_hash = user.createHash(body.password_hash);
  user.password_hash = password_hash;
 }
 await user.save()

  res.json({
    msg:"updated details"
  })}
  catch(e){
    res.json({
      msg: "There is something Wrong",
    })
  }

});
module.exports = router;
