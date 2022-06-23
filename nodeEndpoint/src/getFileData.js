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

app.post("/makeJSONFile", (req, res) => {
    const data = req.body;
    const fileName = req.body.fileName;
    console.log("data is: ", fileName);
    const stringData = JSON.stringify(data);
    const path = `/Users/simoncole/fungiDB/fungi_db/public/${fileName}`;
    fs.writeFile(path, stringData, (err) => {
        if(err){
            console.log(`there was an error in writing the ${fileName} file`);
        }
    });
    res.json({"fileName": fileName});
});