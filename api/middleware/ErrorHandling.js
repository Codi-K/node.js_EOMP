// error handling

function errorHandle(err, req, res, next) {
  if (err) {
    let status = err.status || 500;
    res.json({
      status,
      msg: "An Error Occured; Please try again later.",
    });
  }
  next();
}

module.exports = errorHandle 
