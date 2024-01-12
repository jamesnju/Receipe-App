import express  from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { UserModel } from "../model/User.js";

const router = express.Router();

    router.post("/register", async (req, res) =>{
        const {username, password} =req.body;

        const  user = await UserModel.findOne({username});

        if(user){
            return res.json({message: "User Already exists"});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({ username, password: hashPassword});
        await newUser.save();

        res.json({message: "user successfully registered"});
    });

    router.post("/login", async (req, res) =>{
        const {username, password} = req.body;

        const user = await UserModel.findOne({username});
        if(!user){
            return res.json({message:"User doesnt exist"});
        }

        const isPasswordValue = await bcrypt.compare(password, user.password);
        if(!isPasswordValue){
            return res.json({message: "wrong username or password"});
        }

        const token = jwt.sign({id: user._id}, "secret");

        res.json({token, userID: user._id});
    });

export {router as userRouter};