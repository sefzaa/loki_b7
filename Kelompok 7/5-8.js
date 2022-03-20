const express = require('express');
const limadelapan = express();

limadelapan.listen (3000,function(){
    console.log("Server Ready");
});

limadelapan.get("/", function(req,res){
    res.send("Kelompok-7 Tugas Besar Pemograman Web")
})


limadelapan.get("/cetak_laporan", function(req,res){
    res.send("Cetak Laporan")
})

limadelapan.get("/tambah_rps", function(req,res){
    res.send("Tambah RPS")
})

limadelapan.get("/ubah_rps", function(req,res){
    res.send("Ubah RPS")
})

limadelapan.get("/revisi_rps", function(req,res){
    res.send("Revisi RPS")
})