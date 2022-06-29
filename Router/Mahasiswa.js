const express = require('express');
const router = express()
const controller = require('../controller/indexcontrollers')

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/matkul', controller.mahasiswa.listMatakuliah)

router.get('/detail-:id', controller.mahasiswa.detailrps)

module.exports = router;