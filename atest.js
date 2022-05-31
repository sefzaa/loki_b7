const express = require ('express');
const app = express();
const port = 1234

app.use (express.urlencoded({extended:true}));


const auth = require('.//router/login')
app.use('/auth', auth);


const db = require ("./config/database");
const user = require("./models/users");

db.authenticate().then(() => console.log ("Db terkoneksi"));


app.get("/", function(req, res){
    res.send("Kelompok 7 Pemograman Web")
    
})

// app.post ("/register", async (req, res) =>{
//     try {
//         const {email , password}= req.body
//         const newUser = new user({
//             email,password
//         })
//         await newUser.save();
//         res.json(newUser);

//     }catch(err){
//         console.error(err.message);
//         res.status(500).send("server error");

//     }
// });


app.listen (port,() => {
    console.log('Server Ready in port 1234')
});