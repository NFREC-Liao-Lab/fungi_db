const shelljs = require("shelljs");
const fs = require("fs");
export default function handler(req, res) {
    let resultsFile = getFileName();
    ReadResults(resultsFile, (firstScore, nsequences) => {
        console.log("FirstScoreString before being sent back is: ", firstScore);
        res.status(200).json([
            {"id": "firstScore", "firstScore": `${firstScore}`},
            {"id": "nsequences", "nsequences": nsequences},
        ]);
    });
}

function getFileName(){
    let fileName = shelljs.exec("cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n 1");
    let fileName2 = fileName.trim();
    return fileName2;
}

function ReadResults(resultsFile, receiverFunction){
    let resultsFilePath = "/Users/simoncole/fungiDB/fungi_db/" + resultsFile;
    fs.readFile(resultsFilePath, "utf-8", (err, jsonString) => {
        if(err){
            console.log(`Error in reading file ${resultsFile}: ${err}`);
            return;
        }
        try {
            let ObjectData = JSON.parse(jsonString);
            let firstScore = ObjectData.queries[0].hits[0].total_score;
            let nsequences = ObjectData.stats.nsequences;
            console.log("type of firstScore before stringify is: ", typeof(firstScore));
            console.log("after it is: ", typeof(firstScore));
            console.log("The nsequences is: ", nsequences);
            console.log("The score of the first match is:", firstScore);
            receiverFunction(firstScore, nsequences);
        }
        catch(err) {
            console.log("There was an error in parsing the data: ", err);
            return;
        }
    });
}