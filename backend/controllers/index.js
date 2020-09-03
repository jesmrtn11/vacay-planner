const router = require("express").Router();

router.get("/test", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Jesica Martin",
            manager: "Carolina Rosengren",
            role: "Frontend developer"
        },
        {
            id: 2,
            name: "Anders Nillson",
            manager: "Carolina Rosengren",
            role: "Backend developer"
        },{
            id: 3,
            name: "Erik Petersson",
            manager: "Olla Svensson",
            role: "Project manager"
        }
    ]);
});

module.exports = router;