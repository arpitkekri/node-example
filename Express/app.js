// npm install express 
// We do not have to do manual url parshing and write custom backend express will handle it

const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static file
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine','pug');
// Set the view directory
app.set('views', path.join(__dirname, 'views'));
// Our pug demo endpoint
app.get("/demo", (req,res)=>{
    res.status(200).render('demo', { title: 'Hey Arpit', message: 'Hello there and thanks for telling me how to use pug' })
});

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