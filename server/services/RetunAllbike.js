import bikemodel from "../models/Bike.js"


export const returnbike=async()=>{

 const bikedata= await bikemodel.find().populate('userid');

 return bikedata;
}