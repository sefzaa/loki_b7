const express = require('express');
const no9sampai12 = express();

no9sampai12.listen (3000,function(){
    console.log("Server sudah hidup");
});

no9sampai12.get("/CPMK/add", function(req,res){
    res.send("CPMK berhasil ditambahkan")
})

no9sampai12.get("/CPMK/edit", function(req,res){
    res.send("CPMK berhasil diperbaharui")
})

no9sampai12.get("/CPMK/delete", function(req,res){
    res.send("CPMK Berhasil dihapus")
})

no9sampai12.get("/Reference/add", function(req,res){
    res.send("Referensi berhasil ditambahkan")
})
