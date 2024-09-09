const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.set('strictQuery', true); // To avoid the deprecation warning

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})