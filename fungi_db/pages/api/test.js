const shelljs = require("shelljs");
export default function handler(req, res){
    let files = [];
    let start, tempi = 0;
    let filesIndex = 0;
    let fileNames = shelljs.exec(`cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n 2`);
    for(let i = 0; i < fileNames.length; i++){
        if(fileNames.charAt(i) === "\n"){
            files[filesIndex] = fileNames.slice(start, i)
            filesIndex++;
            tempi = i;
            start = ++tempi;
        }
    }
    res.status(200).json(files);
}