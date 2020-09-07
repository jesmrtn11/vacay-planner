const router = require("express").Router();

module.exports = router;

router.use("/activities", (req, res, next) => {
  res.json({
    activities: [{
      userId: 1,
      startDate: "2020-09-11",
      endDate:   "2020-09-14",
      type: "VACATION"
    }, {
      userId: 2,
      startDate: "2020-09-04",
      endDate:   "2020-09-12",
      type: "SICK_DAY"
    }, {
      userId: 2,
      startDate: "2020-09-22",
      endDate:   "2020-09-27",
      type: "SICK_DAY"
    }]
  });
});
