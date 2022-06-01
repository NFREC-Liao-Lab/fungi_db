const shelljs = require("shelljs");
const fs = require("fs");
export default function handler(req, res) {
    let resultsFile = getFileName();
    ReadResults(resultsFile, (results) => {
        res.status(200).json(
            results
        );
    });
}

function getFileName(){
    let fileName = shelljs.exec("cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n 1");
    let fileName2 = fileName.trim();
    return fileName2;
}

function ReadResults(resultsFile, receiverFunction){
    //showing top 10
    let resultsFilePath = "/Users/simoncole/fungiDB/fungi_db/" + resultsFile;

    let sequenceID = [];
    let taxonomicID = []; //add this with data
    let fungiLifestyle = []; //what is this
    let totalScore = [];
    let queryCoverage = [];
    let eValue = [];
    let identityValue = [];

    fs.readFile(resultsFilePath, "utf-8", (err, jsonString) => {
        if(err){
            console.log(`Error in reading file ${resultsFile}: ${err}`);
            return;
        }
        try {
            let ObjectData = JSON.parse(jsonString);
            for(let i = 0; i < 10; i++){
                sequenceID[i] = ObjectData.queries[0].hits[i].id;
                // TODO: taxonomicID[i] = ObjectData.queries[i]
                // TODO: fungiLifestyle
                // TODO: maxScore
                totalScore[i] = ObjectData.queries[0].hits[i].total_score;
                queryCoverage[i] = ObjectData.queries[0].hits[i].qcovs;
                eValue[i] = ObjectData.queries[0].hits[i].hsps[0].evalue;
                identityValue[i] = ObjectData.queries[0].hits[i].hsps[0].identity;

            }
        }
        catch(err) {
            console.log("There was an error in parsing the data: ", err);
            return;
        }
        let results = [];
        for(let i = 0; i < 10; i++){
            results[i] = {
                "sequenceID": sequenceID[i],
                "totalScore": totalScore[i],
                "queryCoverage": queryCoverage[i],
                "eValue": eValue[i],
                "identityValue": identityValue[i],
            }
        }
        receiverFunction(results);


    });
}