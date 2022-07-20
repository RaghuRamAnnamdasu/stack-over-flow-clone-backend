import { client } from "../index.js";
import {ObjectId} from "mongodb";

export async function getUserByName(email) {
    return await client.db("stackOverFlow").collection("users").findOne({email : email});
  }

export async function createUSer(data) {
return await client.db("stackOverFlow").collection("users").insertOne(data);
}


