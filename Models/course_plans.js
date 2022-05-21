const express = require ('express');
const web = express();

web.get("/", function(req,res){
    res.send("Kelompok 7 Pweb")
    
})

web.listen (3000,function(){
    console.log("Server Ready");
});

web.get("/tambah_rps", function(req,res){
    res.send("Tambah RPS")
})

web.get("/ubah_rps", function(req,res){
    res.send("Ubah RPS")
})

web.get("/revisi_rps", function(req,res){
    res.send("Revisi RPS")
})