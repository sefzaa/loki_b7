const express = require ('express');
const web = express();

web.get("/", function(req,res){
    res.send("Kelompok 7 Pweb")
    
})

web.listen (3000,function(){
    console.log("Server Ready");
});

