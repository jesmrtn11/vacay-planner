const router = require("express").Router();

module.exports = router;

router.use("/users", (req, res, next) => {
  res.json({
    users: [{
      id: 1,
      name: "Jesica Martin"
    }]
  });
});
 