const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,'../public');

app.use(express.static(static_path));

app.get("/index",(req,res)=>
{
    res.sendFile(static_path+'/index.html');
});

app.get("/coronaTracking",(req,res)=>
{
    res.sendFile(static_path+'/coronaTracking.html');
});

app.get("/precautions",(req,res)=>
{
    res.sendFile(static_path+'/precautions.html');
});

app.get("*",(req,res)=>
{
    res.sendFile(static_path+'/error.html');
});

app.listen(port,()=>{
    console.log(`Listenong to the Port: ${port}`);
})