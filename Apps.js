const express = require ('express');
const app = express();
const port = 1234


const auth = require('./Router/login');
app.use('/auth', auth);


app.get("/", function(req, res){
    res.send("Kelompok 7 Pemograman Web")
    
})



app.listen (port,() => {
    console.log('Server Ready in port 1234')
});





// app.get("/cetak_laporan", function(req,res){
//     let pesan = {
//         "message" : "Cetak Laporan",
//         "code error" : 200

//     }
//     res.json(pesan);
// })

// app.get("/tambah_rps", function(req,res){
//     res.send("Tambah RPS")
// })

// app.get("/ubah_rps", function(req,res){
//     res.send("Ubah RPS")
// })

// app.get("/revisi_rps", function(req,res){
//     res.send("Revisi RPS")
// })


// app.get("/addCPMK", function(req,res){
//     res.send("CPMK berhasil ditambahkan")
// })

// app.get("/editCPMK", function(req,res){
//     res.send("CPMK berhasil diperbaharui")
// })

// app.get("/deleteCPMK", function(req,res){
//     res.send("CPMK Berhasil dihapus")
// })

// app.get("/addReference", function(req,res){
//     res.send("Referensi berhasil ditambahkan")
// })

// app.get ("/referensi/ubah",function(req,res){
//     res.send("Mengubah Referensi")
// })

// app.get ("/referensi/hapus",function(req,res){
//     res.send("Menghapus Referensi")
// })

// app.get ("/penilaian/tambah",function(req,res){
//     res.send("Menambah peniaian")
// })

// app.get ("/penilaian/ubah",function(req,res){
//     res.send("Mengubah penilaian")
// })

// app.get ("/penilaian/hapus",function(req,res){
//     res.send("Menghapus penilaian")
// })

// app.get ("/pertemuan-rps/tambah",function(req,res){
//     res.send("Menambah pertemuan mingguan RPS")
// })

// app.get ("/pertemuan-rps/ubah",function(req,res){
//     res.send("Mengubah pertemuan mingguan RPS")
// })

// app.get ("/pertemuan-rps/hapus",function(req,res){
//     res.send("Menghapus pertemuan mingguan RPS")
// })


// app.get("/research", function(req,res){
//     let pencarian ={
//         "Message" : "Mencari Perkuliahan",
//         "MataKuliah" : " ",
//         "Jadwal" : " ",
//         "status" : "200"

//     }
//     res.json(pencarian)
// })

// app.get("/information", function(req,res){
//     res.send("Detail RPS")
// })

// app.get("/going_pdf", function(req,res){
//     res.send("Generate Berhasil")
// })