console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// MongoDB call
const db = require("./server").db();

// 1: Kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session codes

// 3: Views codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
// app.get("/hello", function(req, res) {
//     res.end(`<h1 style="background: red">HELLO WORLD! by Nathan</h1>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1 style="background: green">Siz sovg'alar sahifasidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("successfully added");
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", {user: user });
});

app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;