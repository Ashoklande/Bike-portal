import mongoose from 'mongoose';

const userschema=new mongoose.Schema({
    fullname:{type:String,required:true,},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    bikeid:[{type:mongoose.Schema.Types.ObjectId,
        ref:'bike'
    }]
})

const user=mongoose.model('user',userschema);

export default user;