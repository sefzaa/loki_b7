require('dotenv').config
const jwt = require('jsonwebtoken');

function isAdmin(req,res,next) {

    const token = req.cookies.jwt

    if(token){

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.render('500')
        }else{
            // console.log(decodedToken);
            const type = decodedToken.type
            if(type != 'T') return res.render('500')
            next()
        }
    })
} else{
    res.render('500')
    }
}

function isDosen(req,res,next) {

    const token = req.cookies.jwt

    if(token){

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.render('500')
        }else{
            // console.log(decodedToken);
            const type = decodedToken.type
            if(type != 'D') return res.render('500')
            next()
        }
    })
} else{
    res.render('500')
    }
}

const checkUser = (req,res,next) =>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            res.locals.user = null
            next()
          } else {
            res.locals.user = decodedToken
            res.locals.email = decodedToken.email
            res.locals.nama = decodedToken.nama
            res.locals.type = decodedToken.type
            next();
          }
        });
    }else{
        res.locals.user = null
        res.locals.nama = 'Mahasiswa'
        res.locals.type = 'M'
        next()
    }
}


module.exports = { isAdmin, isDosen , checkUser }