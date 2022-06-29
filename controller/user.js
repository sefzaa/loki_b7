let models = require('../Models');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);


exports.login_showup = function(req, res, next) {
    res.render('Login');
}

exports.login = function(req, res, next) {
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    if(user.email == 'admin'&& user.password=='12345'){
        res.redirect('/admin');
    }
    passport.authenticate('local', {
		successRedirect: "/dosen",
		failureRedirect: "/login",
	})(req, res, next);
    
}

exports.logout = function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.redirect('/');
      });
    
    
}