import user from "../models/user.js";
import FindBikeAndDelete from "../services/findbikepost.js";
import { Addbike } from "../services/InserBikeData.js";
import { returnbike } from "../services/RetunAllbike.js";
import {v2 as cloudinary} from 'cloudinary';


export const AddbikeData=async(req,res)=>{
   try{

      
    const {name,company,color,price,owner,model,running,address,description}=req.body;

      
    if(!name || !company || !color || !owner || !address || !description || !price){
       return res.json({status:'fail',message:'All Fields are mandatory'});
   }
   const images=req.files;
   const uploadedImages = [];
   for (let image of images) {
       const uploadResult = await cloudinary.uploader.upload(image.path);
       uploadedImages.push(uploadResult.secure_url);
   }
   const userdata=req.user;
   if(!userdata._id){
    return res.json({status:'fail',messgae:'User not login'});
    }

    const bikedata=await Addbike({
        name,
        company,
        color,
        owner,
        model,
        price,
        running,
        photo:uploadedImages,
        description,
        userid:userdata._id,
        address,
    });

    if(bikedata){
        await user.findByIdAndUpdate(userdata._id,
            {$push: {bikeid:bikedata._id}},
            {new:true}
        );
        return res.json({ status: 'success', message: 'Bike data added successfully', data: bikedata });

    }

    return res.json({ status: 'fail', message: 'Failed to insert bike data' });

   }catch(err){
    return res.json({status:'fail',message:err.message})
   }

}


export const getAllbike=async(req,res)=>{

    const bikedata=await returnbike();

  return res.json({status:'success',bikedata});
}


export const DeleteBikeData=async(req,res)=>{

    try{

        const {_id}=req.body;
        
        if(!_id){
            return res.json({status:"fail",message:'Id Is required To Delete the post'});
        }

       const bikedata=await FindBikeAndDelete({_id});
       
       return res.json({status:'sucess',bikedata});

    }catch(err){
        return res.json({status:'fail',message:err.message});
        
    }
}