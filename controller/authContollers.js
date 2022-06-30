const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "that email is already registered" }
  // duplicate email error
  if (err.code === 11000) {
    return errors.email;
  }

  return errors.email;
};

//JWT
maxAge = 3 * 24 * 60 * 60;
ms = 1000;
const createToken = (email) => {
  return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: maxAge });
};

module.exports.home = (req, res) => {
  res.redirect("/auth/login");
};



module.exports.login_get = (req, res) => {
  res.render("Login");
};



module.exports.login_post = async (req, res) => {

    //checking Email
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) return res.status(400).send("Email tidak ditemukan")
    //Cek Password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send("Password Salah")
    const name = user.name
    const email = user.email
    const type = user.type

    const token = createToken({
      email : email,
      name : name,
      type : type
    })
    res.cookie('jwt', token, {httponly: true, maxAge: maxAge * ms})
    if(user.type == 'T'){
      res.status(200).redirect('/admin')
    }else if(user.type == 'D'){
      res.status(200).redirect('/dosen/')
    }
    
};

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '',{ maxAge: 1})
  res.redirect('/auth/login')
};