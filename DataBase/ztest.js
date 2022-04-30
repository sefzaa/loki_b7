var express = require('express')
var router = express.Router
var mysql = require ('mysql2')



router.get("/", function(req,res){
    res.send("Kelompok 7 Pweb")
    
})
router.listen (1199,function(){
    console.log("Server Ready");
});


router.get('/', function(req, res, next){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'loki'
    });

    connection.connect();

    connection.query('SELECT id FROM user', function(err, rows, fields){
        if (err) throw err;

        res,json(rows)
    })
})


