const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("User test successful");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send(`Your Username: ${username}`);
})
module.exports = router;
