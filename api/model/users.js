const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userProfile
        FROM Users;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `;

    db.query(query, (err, result) => {
      if (err) throw err;
      res.join({
        status: res.statusCode,
        result,
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "Your Email Address is incorrect.",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({
            emailAdd,
            userPass,
          });
          res.cookie("OhneUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.json({
              msg: "You are successfully Logged In",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Password is Invalid or you have not registered",
            });
          }
        });
      }
    });
  }
  async resgister(req, res) {
    const data = req.body;
    data.userPass = await hash(data.userPass, 10);
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const query = `
        INSERT INTO Users
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      let token = createToken(user);
      res.cookie("LegitUser", token, {
        maxAge: 7200000, // milisecond = 2 hours
        httpOnly: true, 
      });
      res.json({
        status: res.statusCode,
        msg: "You are now registered",
      });
    });
  }
  updateUser(req, res) {
    const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
    db.query(query, [res.body, res.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: statusCode,
        msg: "A User's details has been updated",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM Users
        WHERE userID = ${res.params.id};
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A User has been deleted",
      });
    });
  }
}

module.exports = Users;

