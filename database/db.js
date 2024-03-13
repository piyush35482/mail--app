import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-3kkaail-shard-00-00.ada2sg5.mongodb.net:27017,ac-3kkaail-shard-00-01.ada2sg5.mongodb.net:27017,ac-3kkaail-shard-00-02.ada2sg5.mongodb.net:27017/?ssl=true&replicaSet=atlas-31fig3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DB_URI, { useNewUrlParser: true});
        console.log("database connected successfully");
    } catch (error) {
        console.log("error while connecting to the database", error.message);
    }
}

export default Connection;