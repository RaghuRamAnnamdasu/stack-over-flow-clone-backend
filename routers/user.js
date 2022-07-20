import express from "express";
import {createUSer, getUserByName} from "./helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();

async function genHashedPassword(password){
    const no_of_rounds = 10;
    const salt = await bcrypt.genSalt(no_of_rounds);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
  }

router.post('/signup', async function (req, res) {
    const {email,password,displayName} = req.body[0];
    console.log(req.body);
    console.log(email,password,displayName);
    const userFromDB = await getUserByName(email);

      if(userFromDB){
        res.status(400).send({"message" : "Email already exists"});
      }else if(password.length < 8){
        res.status(400).send({"message" : "Password Shall have minimum 8 characters"});
      }else{
        const hashedPassword = await genHashedPassword(password);
        const result = await createUSer({email : email , password : hashedPassword, displayName: displayName});
        console.log(hashedPassword);
        res.send(result);
      }
  })


  router.post('/login',async function (req, res) {

    


    const {email,password} = req.body[0];
    const userFromDB = await getUserByName(email);
    const storedPassword = userFromDB.password;
    const passwordMatch = await bcrypt.compare(password,storedPassword);
    console.log(passwordMatch); 

      if(!userFromDB){
        res.status(401).send({"message" : "Invalid Credentials"});
      }else if(!passwordMatch){
        res.status(401).send({"message" : "Invalid Credentials"});
      }else{
        const token = jwt.sign({id : userFromDB._id},process.env.secretKey);
        // res.token = token;
        // res.name = userFromDB.displayName;
        res.send({"message" : "Successful Login", token : token, name: userFromDB.displayName });
        // console.log(res.name,req.body[0]);
      }
  })



//   router.post('/forgotpassword', async function(req, res) {
//     const {email} = req.body[0];
//     const userFromDB = await getUserByName(email);
//     console.log(userFromDB);

//       if(!userFromDB){
//         res.status(401).send({"message" : "Email does not exists"});
//       }else{
//        const secret = process.env.secretKey + userFromDB.password;
//         const payload = {
//             email : userFromDB.email,
//             id : userFromDB._id,
//         }
//         const token = jwt.sign(payload,secret,{expiresIn: '15m'});
//         const link = `http://localhost:3000/reset-password/${userFromDB._id}/${token}`;
//         console.log(link);
//         mailer("pravalika.kotta@gmail.com",link);
//         res.send({"message" : "Password rest link has sent to your mail"});
//       }
//   })


    // router.post("/resetpassword/:id")





export const userRouter = router;






//     function mailer(email,link){
//     var transporter = nodemailer.createTransport({
//         service: "outlook",
//         auth: {
//             user: "annamdasuraghuram@outlook.com",
//             pass: process.env.password
//         }
//     });
//     console.log("My pass: ",process.env.password);
//     var mailOptions = {
//         from: "annamdasuraghuram@outlook.com",
//         to: email,
//         subject: "Forgot Password - Stack Over Flow-Clone",
//         text: "Hi User",
//         html: "<div><h4>Hi User,<h4></br><p>please click the link below for password reset</p></br><a href={link}/> </div>"
//     }

//     transporter.sendMail(mailOptions,function(error,info){
//         if(error){
//             console.log(error);
//         }else{
//             console.log(`Email sent:`+info.response)
//         }
//     })
// }
