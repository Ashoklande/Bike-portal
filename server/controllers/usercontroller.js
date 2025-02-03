import bcyrpt from 'bcrypt';
import { createUserService } from '../services/CreateUserService.js';
import { findUser, findUserOnid } from '../services/findUser.js';
import jwt from 'jsonwebtoken';

export const createUser=async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'https://bike-portal-frontend.vercel.app');  // Your frontend domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allowed headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials (cookies, etc.)
  
     try{
        const {fullname,username,password}=req.body;
        
  
        if (!fullname || !username || !password) {
          return res.json({status:'fail',message:''})
        }
  
        const hashpassword=await bcyrpt.hash(password,10);
        

        //username Already present the send error with messgae
           const isuser=await findUser({username});
           
           if (isuser) {
            return res.json({status:'failed',message:'Username Aleady Exist'})
           }
          
         const user=await createUserService({
              fullname,
              username,
              password:hashpassword,
          })

          const token= jwt.sign({ id: user._id },'Ashoka');
          res.cookie('token',token);
          
         
           return res.json({status:'sucess',user,token});
     }catch(err){
        console.log(err.message);
        return res.json({status:'fail',message:err.message});
          }

}

//login
export const userLogin=async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'https://bike-portal-frontend.vercel.app');  // Your frontend domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allowed headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials (cookies, etc.)
   
    const {username,password}=req.body;

    try{

        if(!username || !password){
            return res.json({status:'fail',messgae:'username & password required'});
        }
        const isusername=await findUser({username});
        if(!isusername){
            return res.json({status:'fail',messgae:'username doesnt exist'});
        }

        const matchpassword= await bcyrpt.compare(password,isusername.password)
        if (!matchpassword) {
            return res.json({status:'fail',messgae:'password not match'});
        }

        const token= jwt.sign({ id: isusername._id },'Ashoka');
        res.cookie('token',token);
        

        return res.json({status:'sucess',isusername,token});

    }catch(err){
        return res.json({status:'error',message:err.message})
    }
}

//profile 

export const getProfile=(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'https://bike-portal-frontend.vercel.app');  // Your frontend domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allowed headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials (cookies, etc.)
  
        const user=req.user;
    
        return res.json({status:'sucess',user})
}


export const getDatawithBike=async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'https://bike-portal-frontend.vercel.app');  // Your frontend domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allowed headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials (cookies, etc.)
  
    
     
    try{
        const _id=req.user._id;
        
        if(!_id){
            return res.json({status:'fail',messgae:'UserId required'});
        }
  
        const userwithData= await findUserOnid({_id});
        
        return res.json({status:'sucess',userwithData})

    }catch(err){
        return res.json({status:'fail',message:err.messgae})
    }
}