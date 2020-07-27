const express=require('express');
const mongoose=require('mongoose');
const MONGO_URI=require('./config').MONGOURI;


//app
const app=express();


//db
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,useUnifiedTopology:true
})
.then(()=>{
    console.log("mongoose connected...");
})

app.get('/',(req,res)=>{
res.send('hello pramod');
});

const port=process.env.port || 8000;

app.listen(port,(req,res)=>{
    console.log(`node server is runnig on port ${port}`);
})

