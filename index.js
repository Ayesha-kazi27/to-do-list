import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

let newItems=[];
let newItemswork=[];

app.get("/",(req,res) => {
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const w = new Date();
let dayOfWeek = weekday[w.getDay()];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const m = new Date();
let mn = month[m.getMonth()];

const d = new Date();
let day = d.getDate();

const y = new Date();
let yr = y.getFullYear();

    res.render("index.ejs",{weekd : dayOfWeek, monthName : mn, date : day, year : yr, newlitms : newItems});
});

app.post("/",(req,res)=>{
        let newItem=req.body.newItem;
        newItems.push(newItem);
        res.redirect('/');
});

app.get("/work",(req,res)=>{
    res.render("work.ejs",{newlitms : newItemswork});
});

app.post("/work",(req,res)=>{
    let newItem=req.body.newItem;
    newItemswork.push(newItem);
    res.redirect('/work');
});

app.listen(port,() => {
    console.log(`Listening on ${port}`);
});