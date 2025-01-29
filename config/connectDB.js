import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}


async function connectDB(){
    try{

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to the database");


    } catch (error){
        console.error("Error connecting to database: ", error);
        process.exit(1);
    }
}

export default connectDB;