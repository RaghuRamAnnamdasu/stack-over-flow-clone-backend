import express from "express";
import {createUSer, getUserByName} from "./helper.js";
import { client } from "../index.js";

const router = express.Router();

router.get("/", async function(req,res){
    const members = await client.db("stackOverFlow").collection("questions").aggregate([
        {$project:{tags:1, _id:0}}
    ]).toArray();
    // console.log(members);
    let temp = {};
    let count= 0;
    for(var i=0;i<members.length;i++){
        for(var j=0; j<members[i].tags.length; j++){
            if(temp[members[i].tags[j]]){
                temp[members[i].tags[j]] = temp[members[i].tags[j]] +1;
            }else{
                temp[members[i].tags[j]] = 1;
            }
        }
    }
    console.log(temp);

    var tagsArray = Object.keys(temp);
    // console.log(tagsArray);
    tagsArray.forEach(async (value)=>{
        const tagsUpdation = await client.db("stackOverFlow").collection("tags").updateMany({tagName: value},{$set:{totalQuestions: temp[value]}});
    // console.log(temp[value]);
    })
    const tags = await client.db("stackOverFlow").collection("tags").find().toArray();
    res.send(tags);
    
})


router.get("/:tagName", async function(req,res){
    const {tagName} = req.params;
    console.log(tagName);
    const taggedQuestions = await client.db("stackOverFlow").collection("questions").find({tags : tagName}).toArray();
    const tagDetails = await client.db("stackOverFlow").collection("tags").find({tagName : tagName}).toArray();
    res.send([taggedQuestions,tagDetails]);
})



export const tagsRouter = router;
