const shelljs = require("shelljs");
const fs = require('fs');

let sequenceID2d = [];
let totalScore2d = [];
let queryCoverage2d = [];
let eValue2d = [];
let identityValue2d = [];

export const numberOfResults = 10;

export default function handler(req, res) {
    const fs = req.fs;
    const numberOfSequences = req.body;
    const resultsFiles = getFileNames(numberOfSequences);        
    ReadResults(resultsFiles, numberOfSequences, fs, (results) => {
        //passes array of array of objects
        res.status(200).json(
            results
        );
    });
}

function getFileNames(numberOfSequences){
    let files = [];
    let start = 0;
    let filesIndex = 0;
    let tempi;
    let fileNames = shelljs.exec(`cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n ${numberOfSequences}`);
    for(let i = 0; i < fileNames.length; i++){
        if(fileNames.charAt(i) === "\n"){
            files[filesIndex] = fileNames.slice(start, i)
            filesIndex++;
            tempi = i;
            start = ++tempi;
        }
    }
    return files;
}

function ReadResults(resultsFiles, numberOfSequences, receiverFunction){
    //showing numnberOfResults
    let final = false;
    let resultsFilePaths = [];
    for(let i = 0; i < numberOfSequences; i++){
        resultsFilePaths[i] = "/Users/simoncole/fungiDB/fungi_db/" + resultsFiles[i];
    }

    for(let i = 0; i < numberOfSequences; i++){
        let tempNumberOfSequences = numberOfSequences;
        let sequenceID = [];
        let totalScore = [];
        let queryCoverage = [];
        let eValue = [];
        let identityValue = [];
        let results = [];
        fs.readFile(resultsFilePaths[i], "utf-8", (err, jsonString) => {
            if(err){
                console.log(`Error in reading file ${resultsFiles[i]}: ${err}`);
                return;
            }
            try {
                let ObjectData = JSON.parse(jsonString);
                for(let j = 0; j < numberOfResults; j++){
                    sequenceID[j] = ObjectData.queries[0].hits[j].id;
                    totalScore[j] = ObjectData.queries[0].hits[j].total_score;
                    queryCoverage[j] = ObjectData.queries[0].hits[j].qcovs;
                    eValue[j] = ObjectData.queries[0].hits[j].hsps[0].evalue;
                    identityValue[j] = ObjectData.queries[0].hits[j].hsps[0].identity;

                }
                if(i === --tempNumberOfSequences){
                    final = true;
                    let finalData = assignData(sequenceID, totalScore, queryCoverage, eValue, identityValue, i, final);
                    receiverFunction(finalData);
                }
                else{
                    assignData(sequenceID, totalScore, queryCoverage, eValue, identityValue, i, final);
                }
                console.log("sequenceID2d: ", sequenceID2d);
            }
            catch(err) {
                console.log("There was an error in parsing the data: ", err);
                return;
            }
        });
    }
}

export function assignData(sequenceID, totalScore, queryCoverage, eVaule, identityValue, i, final){

    sequenceID2d.push(sequenceID);
    totalScore2d.push(totalScore);
    queryCoverage2d.push(queryCoverage);
    eValue2d.push(eVaule);
    identityValue2d.push(identityValue);
    if(final){
        let finalData = {
            "sequenceIDs": sequenceID2d,
            "totalScores": totalScore2d,
            "queryCoverages": queryCoverage2d,
            "eValues": eValue2d,
            "identityValues": identityValue2d,
        }
        return finalData;
    }
    else{
        return;
    }

}