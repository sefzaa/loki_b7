const express = require ('express');
const rout = express();

rout.listen (3000, function(){
    console.log("Server Available")
});

rout.post ("/penilaian", function(req,res){
    let tambah = {
        "message" : "penilaian berhasil ditambah",
        "status" : 0
    }
    res.json(tambah);
});

rout.put ("/penilaian/:id",function(req,res){
    let ubah = {
        "message" : "penilaian berhasil diubah",
        "status" : 200
    }
    res.json(ubah);
});

rout.delete ("/penilaian/:id",function(req,res){
    let hapus = {
        "message" : "penilaian yg dipilih berhasil dihapus",
        "status" : 200
    }
    res.json(hapus);
});

rout.post ("/pertemuan-rps",function(req,res){
    let tambah = {
        "message" : "pertemuan rps berhasil ditambah",
        "status" : 200
    }
    res.json(tambah);
});

rout.put ("/pertemuan-rps/:id",function(req,res){
    let ubah = {
        "message" : "pertemuan rps berhasil diubah",
        "status" : 200
    }
    res.json(ubah);
})

rout.delete ("/pertemuan-rps/:id",function(req,res){
    let hapus = {
        "message" : "penilaian berhasil dihapus",
        "status" : 200
    }
    res.json(hapus);
})