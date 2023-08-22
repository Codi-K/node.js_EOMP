const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Watchs {
  fetchWatchs(req, res) {
    const query = `
        SELECT watchID, watchName, quantity, amount, Category, watchUrl
        FROM Watches;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchWatch(req, res) {
    const query = `
        SELECT watchID, watchName, quantity, amount, Category, watchUrl
        FROM Watches
        WHERE watchID = ${req.params.id};
        `;

    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async addWatch(req, res) {
    const data = req.body;
    const query = `
        INSERT INTO Watches
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A watch item was added",
      });
    });
  }
  updateWatch(req, res) {
    const data = req.body;
    const query = `
        UPDATE Watches
        SET ?
        WHERE watchID = ?;
        `;
    db.query(query, [data, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A watch item was updated",
      });
    });
  }
  deleteWatch(req, res) {
    const query = `
        DELETE FROM Watches
        WHERE watchID = ${req.params.id};
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A watch item was deleted",
      });
    });
  }
}

module.exports = Watchs;
