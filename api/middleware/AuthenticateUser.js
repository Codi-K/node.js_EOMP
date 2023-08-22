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
    const token = req.headers["authorization"];
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