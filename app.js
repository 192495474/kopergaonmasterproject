const express=require('express');
const mongoose=require('mongoose');
const MONGO_URI=require('./config').MONGOURI;

//import router
const userrouter=require('./routes/user');
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

//routes middleware
app.use('/api',userrouter);

const port=process.env.port || 8000;

app.listen(port,(req,res)=>{
    console.log(`node server is runnig on port ${port}`);
})

