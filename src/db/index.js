import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);  // try printing this and see what it have.
    }catch(error){
        console.log(`MONGODB connection error ${process.env.MONGODB_URI}/${DB_NAME}`, error);
        process.exit(1) // read about it.
    }
}

export default connectDB;