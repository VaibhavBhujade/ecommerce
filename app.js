const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userRouter = require('./routes/user');

app.use(express.static(__dirname+'/public'));

mongoose.connect("mongodb://localhost/my-db");
app.set('view engine','pug');
app.set('views','./views');

app.get('/',(req,res)=>{
    console.log("App started");
    res.render('home',{products:['Mobile','Tv','Washing Machine']});
})

app.use('/user',userRouter);
app.listen(3000);