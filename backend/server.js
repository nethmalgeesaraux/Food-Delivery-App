import express from 'express';
import cors from 'cors';


//app config
const app = express();
const port = 4000

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Sever Startted on http://localhost:${port}`)
})

//mongodb+srv://nethmalgeesara:200511@cluster0.k2vulpb.mongodb.net/?