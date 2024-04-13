const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || auth.startsWith("bearer")) {
    const token = auth.split(" ")[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.email = decoded;
      next();
    } catch{
      res.json({
        msg: "you don't have access"
      });
    }
  }
};
module.exports = authMiddleware;
