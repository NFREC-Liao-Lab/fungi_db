const shelljs = require("shelljs");
export default async function handler(req, res){
    const numberOfSequences = req.body.numberOfSequences;
    let tempNumberOfSequences = numberOfSequences;
    let files = [];
    let start, tempi = 0;
    let filesIndex = 0;
    let status = false;
    let fileNames = shelljs.exec(`cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n ${++tempNumberOfSequences}`);
    console.log("filenames: ", fileNames);
    for(let i = 0; i < fileNames.length; i++){
        if(fileNames.charAt(i) === "\n"){
            files[filesIndex] = fileNames.slice(start, i)
            filesIndex++;
            tempi = i;
            start = ++tempi;
        }
    }
    for(let i = 0; i < numberOfSequences; i++){
        if(files[i] === ".next"){
            files.splice(i, 1);
            status = true;
        }
    }
    if(!status){
        files.pop();
    }
    console.log(files);
    res.status(200).json(files);
}