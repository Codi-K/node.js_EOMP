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
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile
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
          if (cResult) {
            res.json({
              msg: "You have been successfully logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Your password is invalid or you have not registered",
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
      res.json({
        status: res.statusCode,
        token,
        msg: "You have been registered",
      });
    });
  }
  updateUser(req, res) {
    const data = req.body;
    //encrypt the new password if changed
    if (data.userPass) {
      data.userPass = hashSync(data.userPass, 10);
    }

    const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
    db.query(query, [data, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record was updated",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A user record was deleted",
      });
    });
  }
}

module.exports = Users;
