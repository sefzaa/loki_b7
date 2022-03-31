const express = require ('express');
const limadelapan = express();

limadelapan.listen (3000,function(){
    console.log("Server Ready");
});

limadelapan.get("/", function(req,res){
    res.send("Kelompok 7 Pweb")
    
})


limadelapan.get("/cetak_laporan", function(req,res){
    let pesan = {
        "message" : "Cetak Laporan",
        "code error" : 200

    }
    res.json(pesan);
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