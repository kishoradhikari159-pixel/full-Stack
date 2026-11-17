import mongoose from "mongoose";

export const connectdb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://kishoradhikari159_db_user:test@cluster0.9zgyg3p.mongodb.net/")

        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}