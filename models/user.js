const mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    name: String,
    id: Number,
    address: String,
    contact: Number,
    email: String,
});

const User=mongoose.model('User',userSchema);

module.exports=User;