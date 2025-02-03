import mongoose, { model } from 'mongoose';

const bikeschema= new mongoose.Schema({
    name:{type:String,required:true},
    company:{type:String,required:true},
    color:{type:String},
    owner:{type:String,required:true},
    model:Number,
    running:Number,
    price:Number,
    photo:[{type:String,}],
    description:{type:String},
    address:{type:String,required:true},
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    }
    
});


const bikemodel=mongoose.model('bike',bikeschema);

export default bikemodel;
