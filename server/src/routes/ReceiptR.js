
import  express  from "express";
import { ReceptModel } from "../model/Recept.js";
import mongoose from "mongoose";


const router  = express.Router();

    router.get("/", async (req, res)=>{
        try{
            const response = await ReceptModel.find({});
            res.json(response);
        }
        catch (err){
            res.json(err);
        }
    })

    router.post("/", async (req, res)=>{
        const recipe = new ReceptModel(req.body);
        try{
            const response = await recipe.save();
            res.json(response);
        }catch (err){
            res.json(err);
        }
    })


export {router as receiptRouter}
