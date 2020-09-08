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
    },{
      userId: 3,
      startDate: "2020-09-15",
      endDate:   "2020-09-18",
      type: "VACATION"
    },{
      userId: 4,
      startDate: "2020-09-10",
      endDate:   "2020-09-16",
      type: "PARENTAL_LEAVE"
    },{
      userId: 5,
      startDate: "2020-09-14",
      endDate:   "2020-09-26",
      type: "VACATION"
    },{
      userId: 5,
      startDate: "2020-09-28",
      endDate:   "2020-09-30",
      type: "SERVICE_DAY"
    },{
      userId: 6,
      startDate: "2020-09-19",
      endDate:   "2020-09-22",
      type: "PARENTAL_LEAVE"
    },{
      userId: 7,
      startDate: "2020-09-10",
      endDate:   "2020-09-16",
      type: "VACATION"
    },{
      userId: 7,
      startDate: "2020-09-23",
      endDate:   "2020-09-28",
      type: "SICK_DAY"
    }]
  });
});
