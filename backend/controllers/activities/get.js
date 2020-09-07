const router = require("express").Router();

module.exports = router;

router.use("/activities", (req, res, next) => {
  res.json({
    activities: [{
      userId: 1,
      startDate: "2020-09-11",
      endDate:   "2020-09-14",
      type: "VACATION"
    }]
  });
});
