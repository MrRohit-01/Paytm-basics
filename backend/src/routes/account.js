const { Router } = require("express");
const { Account, User } = require("../db");
const zod = require("zod");
const authMiddleware = require("../middleware/authMiddleware");
const { default: mongoose } = require("mongoose");
const router = Router();



router.get("/balance", authMiddleware, async (req, res) => {
  const email = req.email;
  console.log(email)
  const user = await User.findOne({ email: email });
  console.log(user)
  const account = await Account.findOne({ userId: user._id });
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const toId = req.body.to;
  const amount = req.body.amount;
  const email = req.email;

  if (typeof toId !== "string" || typeof amount !== "string") {
    res.json({
      message: "Invalid Inputs",
    });
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const user = await User.findOne({ email: email }).session(session);
    const fromAccount = await Account.findOne({ userId: user._id }).session(
      session
    );
    const toAccount = await Account.findOne({ userId: toId }).session(session);

    if (fromAccount.balance >= amount) {
      await Account.findByIdAndUpdate(fromAccount._id, {
        $inc: { balance: -amount },
      });
      await Account.findByIdAndUpdate(toAccount._id, {
        $inc: { balance: amount },
      });
      res.json({
        message: "Transfer successful",
      });
      await session.commitTransaction();
    } else {
      res.json({
        message: "Insufficient balance",
      });
    }
  } catch (e) {
    console.log(e);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
});
module.exports = router;
