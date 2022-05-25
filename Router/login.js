const express = require ('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send("Ini Login");
});

router.get('/logout', (req, res) =>{
    res.send("Ini Logout hehe");
});

module.exports = router; 