import mongoose from "mongoose"

export const ConnectTodb=async()=>{

  
    mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log('Mongodb connected');
        
    }).catch((err)=>console.log(err) )
}