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
  sortName(req, res) {
    const query = `
        SELECT watchID, watchName, quantity, amount, Category, watchUrl
        FROM Watches
        ORDER BY watchName;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches were sorted by their Name in ascedning order",
      });
    });
  }
  sortPrice(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl
      FROM Watches
      ORDER BY amount;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches were sorted by their Price",
      });
    });
  }
  filterRolex(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl
      FROM Watches
      WHERE Category
      IN ("Rolex");
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches was filtered to only show Rolex",
      });
    });
  }
  filterAP(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl
      FROM Watches
      WHERE Category
      IN ("Audemars Piguet");
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches was filtered to only show Audemars Piguet",
      });
    });
  }
  filterPP(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl
      FROM Watches
      WHERE Category
      IN ("Patek Philippe");
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches was filtered to only show Patek Philippe",
      });
    });
  }
  filterHublot(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl
      FROM Watches
      WHERE Category
      IN ("Hublot");
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches was filtered to only show Hublot",
      });
    });
  }
  filterTH(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl
      FROM Watches
      WHERE Category
      IN ("TAG Heuer");
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
        msg: "Watches was filtered to only show TAG Heuer",
      });
    });
  }
  searchWatch(req, res) {
    const query = `
      SELECT watchID, watchName, quantity, amount, Category, watchUrl 
      FROM Watches 
      WHERE ( Category LIKE '%${req.params.id}%' OR watchName LIKE '%${req.params.id}%' OR amount LIKE '%${req.params.id}%' );
        `;
    db.query(query, [req.params.id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
}

module.exports = Watchs;
