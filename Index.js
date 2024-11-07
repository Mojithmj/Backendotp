const express=require('express');
const app=express();
const db=require('./Dbconnection');
const dotenv = require("dotenv");
dotenv.config();
const cors=require('cors');
app.use(cors());
const bodyparser=require('body-parser');
app.use(bodyparser.json());

const route=require('./Routes/Routes');
app.use('/',route);

app.listen(4000,()=>{
    console.log('Connection successful');
})