const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./Router/index');
const usersRouter = require('./Router/user');
const port = 1234;
const passport = require('passport');
const session = require('express-session');


app.use(express.urlencoded({ extended: true }));

// const auth = require('.//router/login');
// app.use('/auth', auth);

const db = require('./config/database');
const user = require('./models/users');



db.authenticate().then(() => console.log('Db terkoneksi'));

app.use(express.static(path.join(__dirname,'frontend')));

app.set('views',__dirname+'/frontend');
app.set('view engine','html');

app.engine('html',require('ejs').renderFile);


app.use(session({ secret: 'our new secret'}));
app.use(passport.initialize());
app.use(passport.session());

app.use ('/',indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log('Server Ready in port 1234');
});
