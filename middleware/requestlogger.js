const requestLogger = (req, res, next)=> {
  console.log(req.headers);
  next();
}

module.exports = requestLogger;

