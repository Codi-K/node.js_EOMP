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

module.exports = {
  createToken,
};
