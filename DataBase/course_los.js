const express = require ('express');
const web = express();

web.get("/", function(req,res){
    res.send("Kelompok 7 Pweb")
    
})

web.listen (3000,function(){
    console.log("Server Ready");
});

web.get("/addCPMK", function(req,res){
    res.send("CPMK berhasil ditambahkan")
})

web.get("/editCPMK", function(req,res){
    res.send("CPMK berhasil diperbaharui")
})

web.get("/deleteCPMK", function(req,res){
    res.send("CPMK Berhasil dihapus")
})