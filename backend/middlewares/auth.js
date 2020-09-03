const { networkInterfaces } = require("os");

module.exports = (name) => (req, res, next) => {
  req.user = {
    id: 1,
    name: "Jesica"
  };
  next();
};
