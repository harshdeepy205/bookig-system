const mongoose = require('mongoose');

const user=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
    }
})

mongoose.model('UserDetails',user);


const usernew=mongoose.Schema({
    
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
    otp:{
        type:String,
    },
    time:{
        type:String
    }
})


mongoose.model("NewUserDetails",usernew);