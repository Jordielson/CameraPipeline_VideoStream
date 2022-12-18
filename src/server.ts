import streamRouter from "./routes/StreamRoute";

const express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function(req : any, res : any, next : any){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 3333, () => {
    console.log(`[App]: Server listening on 3333`)
});

// Rotas
app.use('/camera-pipeline', streamRouter)

export { app };