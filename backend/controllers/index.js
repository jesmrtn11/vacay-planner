const router = require("express").Router();

router.use("/api", [
  require("./dates"),
  require("./users")
]);

module.exports = () => {
  return router;
};
