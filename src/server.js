const express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
require('./routes/index')(app);
app.use(cors());
app.use(express.json());
app.listen(3333);