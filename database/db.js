import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-y7mtuqh-shard-00-00.nax70ik.mongodb.net:27017,ac-y7mtuqh-shard-00-01.nax70ik.mongodb.net:27017,ac-y7mtuqh-shard-00-02.nax70ik.mongodb.net:27017/?ssl=true&replicaSet=atlas-fnwryi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`;
    try{
        mongoose.connect(DB_URI, { useNewUrlParser: true});
        console.log("database connected successfully");
    } catch (error) {
        console.log("error while connecting to the database", error.message);
    }
}

export default Connection;