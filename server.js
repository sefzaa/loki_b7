require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { isAdmin, isDosen, checkUser } = require('./middleware/authToken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/views', express.static('views'));

app.get('*', checkUser);

app.get('/', (req, res) => {
  res.render('pencarian');
});
app.get('/login', (req, res) => {
  res.render('Login');
});

app.get('/lihatRps_mhs', (req, res) => {
  res.render('lihatRps_mhs');
});

app.get('/rpssaya_dosen', (req, res) => {
  res.render('rpssaya_dosen');
});

app.get('/lihatRps_dosen', (req, res) => {
  res.render('lihatRps_dosen');
});
app.get('/editrps_dosen', (req, res) => {
  res.render('editrps_dosen');
});
app.get('/matakuliah_admin', (req, res) => {
  res.render('matakuliah_admin');
});
app.get('/tambahmatakuliah_admin', (req, res) => {
  res.render('tambahmatakuliah_admin');
});
app.get('/editmatakuliah_admin', (req, res) => {
  res.render('editmatakuliah_admin');
});

const dosenRouter = require('./router/dosen');
app.use('/dosen', isDosen, dosenRouter);

const MahasiswaRouter = require('./router/Mahasiswa');
app.use('/Mahasiswa', MahasiswaRouter);

const adminRouter = require('./router/admin');
app.use('/admin', isAdmin, adminRouter);

const authRouter = require('./router/auth');
app.use('/auth', authRouter);

app.use('/', (req, res) => {
  res.render('404');
});
app.listen(5000, () => console.log('Server Running'));
