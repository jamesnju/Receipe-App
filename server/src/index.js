import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import { userRouter } from './routes/Users.js';
import { receiptRouter } from "./routes/ReceiptR.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipt", receiptRouter);


mongoose.connect("mongodb+srv://jamesnju:0742215487@recept.tqizmxi.mongodb.net/recept?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

app.listen(3002, ()=> console.log("you can do it james"));




