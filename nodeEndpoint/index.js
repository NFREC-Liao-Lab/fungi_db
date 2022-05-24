//stats.queries.id

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const shelljs = require("shelljs");
const fs = require("fs");
const router = express.Router();
let app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use("/", router);

router.get('/',(req, res) => {
    let firstScore;
    let scoreString;
    let resultsFile = getFileName();
    console.log(`the name of the results file is:${resultsFile}end of string here`);
    ReadResults(resultsFile, (firstScore) => {
        console.log("FirstScoreString before being sent back is: ", firstScore);
        res.send({
        "firstScore": firstScore
    });
    });
});

router.post('/',(req, res) => {
    let query = req.body.query;
    shelljs.exec(`../db/blastnAllDbs.sh ${query}`);
    res.end("This worked");
});

function ReadResults(resultsFile, receiverFunction){
    fs.readFile(resultsFile, "utf-8", (err, jsonString) => {
        if(err){
            console.log(`Error in reading file ${resultsFile}: ${err}`);
            return;
        }
        try {
            let ObjectData = JSON.parse(jsonString);
            let firstScore = ObjectData.queries[0].hits[0].total_score;
            console.log("The nsequences is: ", ObjectData.stats.nsequences)
            console.log("The score of the first match is:", firstScore);
            receiverFunction(firstScore);
        }
        catch(err) {
            console.log("There was an error in parsing the data: ", err);
            return;
        }
    });
}

function getFileName(){
    fileName = shelljs.exec("ls -Art | tail -n 1");
    fileName2 = fileName.trim();
    return fileName2;
}

app.listen(8080,() => {
    console.log("Started on PORT 8080");
    })