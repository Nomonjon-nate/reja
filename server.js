console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

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

app.post("/create-item", (req, resizeBy) => {
    console.log(req);
    resizeBy.json({ test: "success" });
});

app.get('/author', (req, resizeBy) => {
    resizeBy.render("author", {user: user });
});

app.get("/", function(req, resizeBy) {
    resizeBy.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});