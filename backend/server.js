import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodModel from './models/foodModel.js';

import userRouter from './routes/userRoute.js';
import 'dotenv/config'



//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db cont
connectDB();

//api routes
app.use("/api/food",foodModel)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)



app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Sever Startted on http://localhost:${port}`)
})

