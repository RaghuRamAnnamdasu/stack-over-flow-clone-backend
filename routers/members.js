import express from "express";
import {createUSer, getUserByName} from "./helper.js";
import { client } from "../index.js";

const router = express.Router();

router.get("/", async function(req,res){
    const members = await client.db("stackOverFlow").collection("users").aggregate([{$project:{email:1, displayName:1, _id:0}}]).toArray();
    res.send(members);
    console.log(members);
})







export const membersRouter = router;
