// npm install express 
// We do not have to do manual url parshing and write custom backend express will handle it

const express = require("express");

const app = express();
const port = 80;
app.get("/", (req, res)=>{
    res.status(200).send("This is my first express app tutorial in learning phase");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of express app tutorial in learning phase");
});

app.post("/about", (req, res)=>{
    res.send("This is post request about page of express app tutorial in learning phase");
});

app.get("/this", (req, res)=>{
    res.setHeader('Content-Type', 'text/HTML');
    res.status(400).send(`<h1>This page is not found on my website</h1>`);
});

app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});