import user from "../models/user.js";


export const  createUserService=async ({
    fullname,
    username,
    password,
})=>{

    if(!username || !fullname || !password){
        throw new Error('All Field Arer required')
    }
   const userdata= await user.create({
        fullname,
        username,
        password,
    })
     
    return userdata;
}