const express = require("express");
const router = express.Router();
const { User, Account } = require("../db");
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
  password_hash: zod.string().optional(),
});
const prodSchema = zod.string().min(5);
const firstSchema = zod.string().min(5);

router.get("/me", async (req, res) => {
  const auth = req.headers.authorization;
  const token = auth.split(" ")[1]
  try {
    const userEmail = jwt.decode(token);
    const userDetails = await User.findOne({
      Email : userEmail.email
    });
    res.json({
      userDetails,
    });
  } catch (e) {
    console.log(e);
  }
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signUp.safeParse(body);
  console.log(success)
  if (!success) {
    res.json({
      msg: "Enter vaild details",
    });
    return;  
  }
console.log("ddd")
  const existUser = await User.findOne({ email: body.email });
  if (existUser) {
    res.json({
      msg: "email already exist",
    });
    return;  
  } else {
    const newUser = new User({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
    });

    const hashedPassword = await newUser.createHash(body.password);

    newUser.password_hash = hashedPassword;

    const userId = await newUser.save();
    Account.create({
      userId: userId._id,
      balance: parseInt(Math.random() * 10000),
    });
    const token = jwt.sign({ email: body.email }, JWT_SECRET);
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
      const token = jwt.sign({ email: body.email }, JWT_SECRET);
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
    res.end();
  }
  const email = req.email;
  try {
    const user = await User.findOne({ email: email });
    if (body.firstName) user.firstName = body.firstName;
    if (body.lastName) user.lastName = body.lastName;
    if (body.password_hash) {
      const password_hash = user.createHash(body.password_hash);
      user.password_hash = password_hash;
    }
    await user.save();

    res.json({
      msg: "updated details",
    });
  } catch (e) {
    res.json({
      msg: "There is something Wrong",
    });
  }
});
router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  // You should make string 'param' as ObjectId type. To avoid exception,
  // the 'param' must consist of more than 12 characters.

  const filterData = await User.find({
    $or: [
      { firstName: new RegExp(".*" + filter + ".*") },
      { lastName: new RegExp(".*" + filter + ".*") },
    ],
  });
  let Alldata = [];
  filterData.map((data, index) => {
    Alldata[index] = {
      id:data._id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
  });
  res.json(Alldata);
});
module.exports = router;
