

exports.my_rps = function(req, res, next) {
    res.render('rpssaya_dosen',{user:req.user});
}

exports.create_rps = function(req, res, next) {
    res.render('tambahrps_dosen');
}