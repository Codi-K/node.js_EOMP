const Users = require("./users");
const Watchs = require("./watchers");


// export all files

module.exports = {
  users: new Users(),
  watchs: new Watchs()
};
