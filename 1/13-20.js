const express = require ('express');
const rps = express();

rps.listen (3000, function(){
    console.log("Server Available")
});

rps.get ("/referensi/ubah",function(req,res){
    res.send("Mengubah Referensi")
})

rps.get ("/referensi/hapus",function(req,res){
    res.send("Menghapus Referensi")
})

rps.get ("/penilaian/tambah",function(req,res){
    res.send("Menambah peniaian")
})

rps.get ("/penilaian/ubah",function(req,res){
    res.send("Mengubah penilaian")
})

rps.get ("/penilaian/hapus",function(req,res){
    res.send("Menghapus penilaian")
})

rps.get ("/pertemuan-rps/tambah",function(req,res){
    res.send("Menambah pertemuan mingguan RPS")
})

rps.get ("/pertemuan-rps/ubah",function(req,res){
    res.send("Mengubah pertemuan mingguan RPS")
})

rps.get ("/pertemuan-rps/hapus",function(req,res){
    res.send("Menghapus pertemuan mingguan RPS")
})