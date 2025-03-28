const express = require('express');
const app = express();
const cors = require("cors")
const routerSchema = require("./routes/index.js")
const userRouter = require("./routes/user")
const accountRouter = require("./routes/account.js")
 app.use(express.json())
 app.use(cors())

 
app.use("/",routerSchema);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/account",accountRouter);

 
app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
});