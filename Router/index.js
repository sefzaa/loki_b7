const express = require ('express');
const router = express.Router();
let pencarian = require('../controller/pencarian');
let user = require('../controller/user');
let admin = require('../controller/admin');
let dosen = require('../controller/dosen');

//pencarian
router.get('/', pencarian.get_pencarian);

//login
router.get('/login', user.login_showup);
router.post('/login', user.login);
router.get('/logout', user.logout);

//Admin mata kuliah
router.get('/admin', admin.matkul_admin);
router.get('/tambahmatakuliah', admin.create_matkul);

//dosen
router.get('/dosen', dosen.my_rps);
router.get('/tambahrps', dosen.create_rps);





module.exports = router;