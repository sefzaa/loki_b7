const express = require('express');
const no9sampai12 = express();

no9sampai12.listen (3000,function(){
    console.log("Server sudah hidup");
});

no9sampai12.get("/addCPMK", function(req,res){
    res.send("CPMK berhasil ditambahkan")
})

no9sampai12.get("/editCPMK", function(req,res){
    res.send("CPMK berhasil diperbaharui")
})

no9sampai12.get("/deleteCPMK", function(req,res){
    res.send("CPMK Berhasil dihapus")
})

no9sampai12.get("/addReference", function(req,res){
    res.send("Referensi berhasil ditambahkan")
})
