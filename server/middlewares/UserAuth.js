
import jwt from 'jsonwebtoken';
import user from '../models/user.js';

export const userAuth=async(req,res,next)=>{
    
   const cookie= req.cookies.token ||req.headers['authorization'].split(' ')[1];;
   
   if(!cookie){
    return res.json({status:'fail',messgae:'user must be login'})
   }

   const data = jwt.verify(cookie,'Ashoka');

      const userdata=await user.findById(data.id).select('-password');
      req.user=userdata;

      next();

}