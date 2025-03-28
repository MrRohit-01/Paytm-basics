const { Router } = require("express");
const { Account, User } = require("../db");
const zod = require("zod");
const authMiddleware = require("../middleware/authMiddleware");
const { default: mongoose } = require("mongoose");
const router = Router();



router.get("/balance", authMiddleware, async (req, res) => {
  const email = req.email;
  const user = await User.findOne({ email: email });

  const account = await Account.findOne({ userId: user._id });
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { to, amount } = req.body;
  const email = req.email;

  if (typeof to !== "string" || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ message: "Invalid Inputs" });
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await User.findOne({ email }).session(session);
    const fromAccount = await Account.findOne({ userId: user._id }).session(session);
    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!fromAccount || !toAccount) {
      throw new Error("Accounts not found");
    }

    if (fromAccount.balance < amount) {
      throw new Error("Insufficient balance");
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;

    await fromAccount.save({ session });
    await toAccount.save({ session });

    await session.commitTransaction();
    res.json({ message: "Transfer successful" });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ message: error.message });
  } finally {
    session.endSession();
  }
});

module.exports = router;
