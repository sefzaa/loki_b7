const express = require('express');
const referensi = express();

referensi.listen (3000,function(){
    console.log("Server sudah hidup");
});

//menambah referensi
referensi.post("/addReferensi/:id", function(req,res){
    let tambahReferensi = {
        "message" : "Referensi berhasil ditambahkan",
        "status" : 0
    }
    res.json(tambahReferensi);
})

//mengubah referensi
referensi.put("/editReferensi/:id", function(req,res){
    let editReferensi = {
        "message" : "Referensi berhasil diperbaharui",
        "status" : 0
    }
    res.json(editReferensi);
})

//menghapus referensi
referensi.delete("/deleteReferensi/:id", function(req,res){
    let hapusReferensi = {
        "message" : "Referensi berhasil dihapus",
        "status" : 0
    }
    res.json(hapusReferensi);
})