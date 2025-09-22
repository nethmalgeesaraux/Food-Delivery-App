import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nethmalgeesara:200511@cluster0.k2vulpb.mongodb.net/food web').then(() => console.log ("DB connected"));
    
}