import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://najas:najas@luxenest-estate.ngvydul.mongodb.net/todo-app?retryWrites=true&w=majority&appName=LuxeNest-Estate')
    console.log("Mongoose Connected Successfully");
}