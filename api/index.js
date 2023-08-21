const { express, routes } = require("./controller");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandle = require('./middleware/ErrorHandling')
const port = +process.env.PORT || 3000;


//middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

//static
app.use(
  express.static("./static"),
  express.urlencoded({
    extended: false,
  }),
  cookieParser(),
  cors(),
  routes
);

//error handling from middleware
app.use(errorHandle);

// Home Page connection

routes.get("^/$|/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

app.listen(port, () => {
  console.log(`The server is running on port : ${port} 😎`);
});
