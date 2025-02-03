import bikemodel from "../models/Bike.js";

const FindBikeAndDelete=async({_id})=>{
    if(!_id){
        throw new Error("Id must required");
        }
        const bikedata=await bikemodel.findByIdAndDelete({_id});  
        
        return bikedata;

}

export default FindBikeAndDelete;