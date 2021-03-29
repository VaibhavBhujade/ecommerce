const express=require('express');
const userRouter=express.Router();
var User=require('../models/user.js');

userRouter.use(express.json());
userRouter.use(express.urlencoded({
  extended: true
}));

userRouter.get('/:id',(req,res)=>{
    console.log(req.params.id);
    //Fetch user from db
    res.send("Looking for user : "+req.params.id);
});

userRouter.get('/',(req,res)=>{
    res.render('addUser');
});

userRouter.post('/',(req,res)=>{
    var userInfo=req.body;

    var newUser=User({
        name:userInfo.name,
        id:userInfo.id,
        address:userInfo.address,
        contact:userInfo.contact,
        email:userInfo.email,
    });

    newUser.save(function(err, User){
        if(err)
           res.render('show_message', {message: "Database error", type: "error"});
        else
           res.render('show_message', {
              message: "New person added", type: "success", user: userInfo});
     });
})

module.exports=userRouter;