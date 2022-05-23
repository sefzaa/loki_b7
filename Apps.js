
//
web.get("/cetak_laporan", function(req,res){
    let pesan = {
        "message" : "Cetak Laporan",
        "code error" : 200

    }
    res.json(pesan);
})

web.get("/tambah_rps", function(req,res){
    res.send("Tambah RPS")
})

web.get("/ubah_rps", function(req,res){
    res.send("Ubah RPS")
})

web.get("/revisi_rps", function(req,res){
    res.send("Revisi RPS")
})


web.get("/addCPMK", function(req,res){
    res.send("CPMK berhasil ditambahkan")
})

web.get("/editCPMK", function(req,res){
    res.send("CPMK berhasil diperbaharui")
})

web.get("/deleteCPMK", function(req,res){
    res.send("CPMK Berhasil dihapus")
})

web.get("/addReference", function(req,res){
    res.send("Referensi berhasil ditambahkan")
})

web.get ("/referensi/ubah",function(req,res){
    res.send("Mengubah Referensi")
})

web.get ("/referensi/hapus",function(req,res){
    res.send("Menghapus Referensi")
})

web.get ("/penilaian/tambah",function(req,res){
    res.send("Menambah peniaian")
})

web.get ("/penilaian/ubah",function(req,res){
    res.send("Mengubah penilaian")
})

web.get ("/penilaian/hapus",function(req,res){
    res.send("Menghapus penilaian")
})

web.get ("/pertemuan-rps/tambah",function(req,res){
    res.send("Menambah pertemuan mingguan RPS")
})

web.get ("/pertemuan-rps/ubah",function(req,res){
    res.send("Mengubah pertemuan mingguan RPS")
})

web.get ("/pertemuan-rps/hapus",function(req,res){
    res.send("Menghapus pertemuan mingguan RPS")
})


web.get("/research", function(req,res){
    let pencarian ={
        "Message" : "Mencari Perkuliahan",
        "MataKuliah" : " ",
        "Jadwal" : " ",
        "status" : "200"

    }
    res.json(pencarian)
})

web.get("/information", function(req,res){
    res.send("Detail RPS")
})

web.get("/going_pdf", function(req,res){
    res.send("Generate Berhasil")
})