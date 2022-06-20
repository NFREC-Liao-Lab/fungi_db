const express = require("express");
const fs = require("fs");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.listen(4000, () => {
    console.log("Running express server on port 4000");
});

let fileNames = [];
let data = [];
let numberOfSequences;

app.get("/", (req, res) => {

    if(fileNames[0]){
        for(let i = 0; i < numberOfSequences; i++){
            let rawData = fs.readFileSync(`/Users/simoncole/fungidb/fungi_db/${fileNames[i]}`);
            data[i] = JSON.parse(rawData);
        }
        res.send({"data": data});
    }
    else{
        res.send({"data":"No file names"})
        
    }
});

app.post("/", (req, res) => {
    fileNames = req.body.fileNames;
    numberOfSequences = req.body.numberOfSequences;
    res.json({"status": 200});
});

