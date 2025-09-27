const express=require('express');
const db=require('./db');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();
const User =require('./Models/User');
app.post('/api/signup',async (req,res)=>{
  try{
    const data=req.body;
    const newUser=new User(data);
    const response=await newUser.save();
    console.log('data saved');
     res.status(200).json(response);
  }
  catch(error){
     console.log(error);
     res.status(500).json({error:'internal server error'});
  }
})




app.post('/api/login',async (req,res)=>{
  try{
    const {emailId, password} = req.body;

    
    const user = await User.findOne({emailId: emailId});


    if( !user || !(await user.isPasswordCorrect(password, user.password))){
        return res.status(401).json({error: 'Invalid username or password'});
    }
    console.log('logged in');
    res.status(200).json(user);
  }
  catch(error){
    console.log(err);
    res.status(500).json({err:'internal server error'});
  }
})


const port=process.env.PORT;
app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})