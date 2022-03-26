const express = require('express');
const cpmk = express();

cpmk.listen (3000,function(){
    console.log("Server sudah hidup");
});

//menambah CPMK
cpmk.post("/addCPMK/:id", function(req,res){
    let tambahCpmk = {
        "message" : "CPMK berhasil ditambahkan",
        "status" : 0
    }
    res.json(tambahCpmk);
})

//mengubah CPMK
cpmk.put("/editCPMK/:id", function(req,res){
    let editCpmk = {
        "message" : "CPMK berhasil diperbaharui",
        "status" : 0
    }
    res.json(editCpmk);
})

//menghapus CPMK
cpmk.delete("/deleteCPMK/:id", function(req,res){
    let hapusCpmk = {
        "message" : "CPMK berhasil dihapus",
        "status" : 0
    }
    res.json(hapusCpmk);
})