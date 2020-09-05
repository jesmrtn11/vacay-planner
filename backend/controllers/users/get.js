const router = require("express").Router();

module.exports = router;

router.use("/users", (req, res, next) => {
  res.json({
    users: [
      {
        id: 1,
        name: "Laura Graham",
        username: "Bret",
        email: "Sincere@test.com",
        role: "Project manager",
        startDate: "2020-06-10",
        endDate: "2020-07-03"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        role: "Frontend developer",
        startDate: "2020-06-15",
        endDate: "2020-07-10"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@test.com",
        role: "Frontend developer",
        startDate: "2020-06-10",
        endDate: "2020-07-03"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@test.com",
        role: "Backend developer",
        startDate: "2020-05-30",
        endDate: "2020-06-23"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@test.com",
        role: "Project manager",
        startDate: "2020-07-01",
        endDate: "2020-07-30"
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@test.com",
        role: "UX designer",
        startDate: "2020-06-10",
        endDate: "2020-07-03"
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@test.com",
        role: "Frontend developer",
        startDate: "2020-06-03",
        endDate: "2020-06-22"
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@test.com",
        role: "Backend developer",
        startDate: "2020-08-02",
        endDate: "2020-08-28"
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@test.com",
        role: "UX designer",
        startDate: "2020-06-20",
        endDate: "2020-07-15"
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@test.com",
        role: "Frontend developer",
        startDate: "2020-07-11",
        endDate: "2020-07-30"
      }
    ]
  });
});
