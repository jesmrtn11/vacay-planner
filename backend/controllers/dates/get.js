const router = require("express").Router();

module.exports = router;

router.use("/dates", (req, res, next) => {
  res.json({
    dates: [{
      userId: 1,
      startDate: "2020-09-11",
      endDate:   "2020-09-14",
      type: "VACATION"
    }]
  });
});
