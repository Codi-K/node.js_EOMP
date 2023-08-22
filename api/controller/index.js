const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const { verifyToken } = require("../middleware/AuthenticateUser");


const { users, watchs } = require("../model");

//========= User router ==========

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});

routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});

routes.post("/user", bodyParser.json(), (req, res) => {
  users.resgister(req, res);
});

routes.post("/login" ,bodyParser.json(), (req, res) => {
  users.login(req, res);
});

routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

//========= Watch router ==========

routes.get("/products", (req, res) => {
  watchs.fetchWatchs(req, res);
});

routes.get("/product/:id", (req, res) => {
  watchs.fetchWatch(req, res);
});

routes.post("/product", bodyParser.json(), (req, res) => {
  watchs.addWatch(req, res);
});

routes.patch("/product/:id", bodyParser.json(), (req, res) => {
  watchs.updateWatch(req, res);
});

routes.delete("/product/:id", (req, res) => {
  watchs.deleteWatch(req, res);
});

module.exports = {
  express,
  routes,
};
