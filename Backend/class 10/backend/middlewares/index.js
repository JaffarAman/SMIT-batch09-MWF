const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log(req.headers["authorization"]);
  try {
    if (req.headers["authorization"]) {
      const token = req.headers["authorization"].split(" ");
      console.log(token[1]);
      const isVerify = jwt.verify(token[1], "PRIVATEKEY");
      console.log("isVerify", isVerify);
      if (isVerify) {
        next();
      }
    } else {
      res.json({
        status: false,
        message: "UnAuth user",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      message: "UnAuth user",
    });
  }
};

module.exports = {
  authMiddleware,
};
