const middlewares = require(".");

module.exports = () => (req, res, next) => {
  if (req.is("multipart/form-data")) {
    return next();
  }
  req.body = "";
  req.on("data", (text) => {
    req.body += text;
  });
  req.on("end", () => {
    if (!req.body) {
      req.body = null;
    }
    next();
  });
}

