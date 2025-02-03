import user from "../models/user.js";

export const findUser= async({username})=>{
    
    if (username) {
        const isUser= await user.findOne({username});
        return isUser;
    }else{
        return null;
    }
}


export const findUserOnid=async({_id})=>{

    if(!_id){
        throw new Error('User Id required.')
    }
    
   const bikedata=await user.findOne({_id:_id}).populate('bikeid');
   console.log(bikedata);
   
   
   if(bikedata){
    return bikedata
   }



}