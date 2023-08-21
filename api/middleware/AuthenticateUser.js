require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
}


function verifyToken(req, res, next) {
  try {
    console.log("Get token from req.headers['authorization']");
    const token = req.headers["authorization"];
    console.log(token);
    next();
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: e.message,
    });
  }
}

module.exports = {
  createToken,
  verifyToken
}