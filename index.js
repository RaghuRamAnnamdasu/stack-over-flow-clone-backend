import express from "express";
import {request, response} from "express";
import {Db, MongoClient} from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routers/user.js";
import { questionsRouter } from "./routers/questions.js";
import { membersRouter } from "./routers/members.js";
import { tagsRouter } from "./routers/tags.js";
import nodemailer from "nodemailer";

const app = express();

dotenv.config();


app.use(cors((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}

));
// dotenv.config();
// app.use(express.json());


 
// app.use( cors({ origin: "*", }) );
// app.use(
//     cors({
//       origin: "*",
//     })
//   );

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

app.use(express.json());

const PORT = process.env.PORT;
const Mongo_URL = process.env.Mongo_URL;

async function createConnection(){
    const client = new MongoClient(Mongo_URL);
    await client.connect();
    console.log("MongoDB is Connected");
    return client;
}

export const client = await createConnection();

app.get("/", async function(request,response){
    response.send("Hi, Welcome to Hackathon...!!!")

})

// app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     // res.setHeader("Access-Control-Allow-Origin","https://chimerical-salmiakki-4bb982.netlify.app");
//     // res.setHeader("Access-control-Allow-Methods", "GET, POST, PUT");
//     // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
//     // res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });

app.use("/user",userRouter);
app.use("/questions",questionsRouter);
app.use("/members",membersRouter);
app.use("/tags",tagsRouter);




app.listen(PORT,()=>console.log(`App has Started in ${PORT}`));











