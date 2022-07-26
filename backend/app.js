const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/main", function(req,res){
   

    res.send({
        message: "Express backend"
})
})

app.listen(9090,function(){
    console.log("Server working");
})
