const express = require ('express')
const router  = express()
const controller = require('../controller/indexcontrollers')

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/', controller.dosen.listmatkul)
router.get('/detail-:id', controller.dosen.detailmatkul)

//tambah
router.get('/detail-:id/tambah', controller.dosen.tambahRPS, controller.dosen.tambahcpmk, controller.dosen.tambahReferensi, controller.dosen.tambahPenilaian, controller.dosen.tambahMingguan)
router.get('/detail-:id/edit', controller.dosen.editRPS, controller.dosen.tambahcpmk, controller.dosen.tambahReferensi, controller.dosen.tambahPenilaian, controller.dosen.tambahMingguan)

//revisi
router.get('/detail-:id/revisi', controller.dosen.revisirps)
router.get('/detail-:id/revisi-cpmk', controller.dosen.cpmk)
router.get('/detail-:id/revisi-referensi', controller.dosen.referensi)
router.get('/detail-:id/revisi-penilaian', controller.dosen.penilaian)
router.get('/detail-:id/revisi-mingguan', controller.dosen.mingguan)

//revisi Referensi
router.post("/tambahreferensi", controller.dosen.tambahReferensi)
router.post("/editreferensi", controller.dosen.editReferensi)
router.post("/hapusreferensi", controller.dosen.hapusreferensi)

//revisi penilaian
router.post("/tambahpenilaian", controller.dosen.tambahPenilaian)
router.post("/editpenilaian", controller.dosen.editPenilaian)
router.post("/hapuspenilaian", controller.dosen.hapusPenilaian)

//revisi CPMK
router.post("/tambahcpmk", controller.dosen.tambahcpmk)
router.post("/editcpmk", controller.dosen.editcpmk)
router.post("/hapuscpmk", controller.dosen.hapuscpmk)


//Mingguan
router.post("/tambahmingguan", controller.dosen.tambahMingguan)
router.post("/editmingguan", controller.dosen.editMingguan)
router.post("/hapusmingguan", controller.dosen.hapusMingguan)

router.get('/tambah', (req,res) => {
    res.render('tambahRPS')
})
router.get('/edit', (req,res) => {
    res.render('dosen-editRPS')
})



module.exports = router