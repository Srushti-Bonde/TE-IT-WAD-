const express=require('express');
const app=express();

app.use(express.static('public'))

app.listen(4500, ()=>
{
    console.log("Server is running ");
})
