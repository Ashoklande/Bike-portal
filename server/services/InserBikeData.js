import bikemodel from "../models/Bike.js"; 
import mongoose from "mongoose";

export const Addbike = async ({
    name,
    company,
    color,
    price,
    owner,
    model,
    running,
    photo,
    description,
    userid,
    address,
}) => {
    // Check if required fields are provided
    if (!name || !company || !color || !owner || !photo || !userid || !price) {
        throw new Error("All Fields are mandatory");
    }
  
    
    if (!mongoose.Types.ObjectId.isValid(userid)) {
        throw new Error("Invalid user ID");
    }

    // Create bike data
    const bikedata = await bikemodel.create({
        name,
        company,
        color,
        price,
        owner,
        model,
        running,
        photo,
        description,
        userid,
        address,
    });

    return bikedata;
};
