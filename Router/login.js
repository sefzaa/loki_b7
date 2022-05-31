// import {fileURLToPath} from 'url';
// import { dirname } from 'path'

const express = require ('express');
const router = express.Router();



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);



router.get('/login', (req, res) => {
        res.send("Haiii");

});


router.get('/logout', (req, res) =>{
    res.send("Ini Logout hehe");
});

module.exports = router; 