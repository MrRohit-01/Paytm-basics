const express = require('express');
const app = express();
const cors = require("cors")
const routerSchema = require("./routes/index")
const userRouter = require("./routes/user")
 app.use(express.json())
 app.use(cors({
  // origin: 'http://localhost:5731',
  // optionsSuccessStatus: 200
}))
app.use("/api/v1",routerSchema);
app.use("/api/v1/user",userRouter);

 
app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
});