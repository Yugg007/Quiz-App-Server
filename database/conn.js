import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://Test123:Test-123@cluster0.rxnfe.mongodb.net/quiz")
    console.log("Database Connected")
}