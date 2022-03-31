const express = require('express');
const no21sampai23 = express();

no21sampai23.listen (3000,function(){
    console.log("Server Ready");
});

no21sampai23.get("/research", function(req,res){
    let pencarian ={
        "Message" : "Mencari Perkuliahan",
        "MataKuliah" : " ",
        "Jadwal" : " ",
        "status" : "200"

    }
    res.json(pencarian)
})

no21sampai23.get("/information", function(req,res){
    res.send("Detail RPS")
})

no21sampai23.get("/going_pdf", function(req,res){
    res.send("Generate Berhasil")
})