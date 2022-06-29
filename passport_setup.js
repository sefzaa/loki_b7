let LocalStrategy = require('passport-local').Strategy;

const models = require('./Models');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id)
	});
	passport.deserializeUser(function(id, done) {
		models.user.findOne({
			where: {
				'id' : id
			}
		}).then(user => {
			if (user == null) {
				done(new Error('Wrong user id.'))
			}
			done(null, user);
		})
	});
	passport.use(new LocalStrategy({
		usernameField: 'email', 
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done) {
		return models.user.findOne({
			where: {
				'email' : email,
                'password' : password
			},
		}).then(user => {
			if (user == null) {
				
				return done(null, false)
			} else if (user.password == null || user.password == undefined) {
				
				return done(null, false)
			} 
			return done(null, user);
		}).catch(err => {
			done(err, false);
		})
	}))
}