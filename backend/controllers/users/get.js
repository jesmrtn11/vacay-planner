const router = require("express").Router();
const db = require("../../db");

module.exports = router;

router.get("/users", async (req, res) => {
  let users = db.query({
    sql: `
    SELECT *
    FROM users
    `
  });
  res.json({
    users: await users
  });
});

// router.use("/users", (req, res, next) => {
//   res.json({
//     users: [{
//       id: 1,
//       name: "Jesica Martin",
//       project: "Innovation",
//       role: "Frontend"
//     }, {
//       id: 2,
//       name: "Alma Svensson",
//       project: "IKEA",
//       role: "Backend"
//     },{
//       id: 3,
//       name: "Mathias Olofsson",
//       project: "Chatbot",
//       role: "Fullstack"
//     },{
//       id: 4,
//       name: "Maurits Johansson",
//       project: "VR-Timber",
//       role: "Frontend"
//     },{
//       id: 5,
//       name: "Carolina Rosengren",
//       project: "HacktheSandbox",
//       role: "Project manager"
//     },{
//       id: 6,
//       name: "Emelie Lundqvist",
//       project: "DeepLens",
//       role: "Project manager"
//     },{
//       id: 7,
//       name: "Henrik Gudmundsson",
//       project: "IKEA",
//       role: "Frontend"
//     }]
//   });
// });
