const express = require('express');
const router = express()
const controller = require('../controller/indexcontrollers')

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get("/", controller.admin.dashboard)
router.get("/matakuliah", controller.admin.listMatakuliah)
router.get("/lihat-laporan", controller.admin.laporan)
router.get("/dosen-:id", controller.admin.MenentukanDosen)
router.get("/dosen-:id/laporan", controller.admin.CPMK)

router.get('/cpmk', (req,res) => {
    res.render('cplkecpmk')
})

router.post("/tambahmatkul", controller.admin.tambahMatkul)
router.post("/tambahdosen", controller.admin.tambahDosenMatkul)
router.post("/hapusdosen", controller.admin.hapusDosenMatkul)

module.exports = router;