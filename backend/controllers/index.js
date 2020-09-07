const router = require("express").Router();

router.use("/api", [
  require("./activities"),
  require("./users")
]);

module.exports = () => {
  return router;
};
