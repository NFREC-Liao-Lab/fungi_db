const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.listen(4000, () => {
    console.log("Running express server on port 4000");
});

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '79037197',
  database : 'fungidb'
});
 
app.post("/postTableData", (req, res) => {
    const ID = req.body.ID;
    console.log("Id being posted: ", ID);
    const tableData = req.body.tableData;
    connection.connect();
    try{
        let theQuery = "INSERT INTO resultsTableData(ID, tableData) VALUES (?, ?)"
        connection.query(theQuery, [ID, tableData], function (error, results, fields){
            if(error) throw error;
            else res.json({"status": 200});
        });
    }
    catch(error){
        console.log("there was an error: ", error);
        res.status({"status": 500});
    }
    connection.end();    
})

app.post("/getSQLData", (req, res) => {
    const ID = JSON.parse(req.body.ID);
    let theQuery = "SELECT tableData FROM resultsTableData WHERE ID=?;";
    try{
        connection.query(theQuery, [ID], function (error, results, fields){
            if(error) throw error;
            else{ 
                const data = results[0].tableData;
                res.json({"data": data});
            };
        });
    }
    catch(error){
        console.log("There was an error ", error);
    }
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

app.post("/deleteCSVDownload", (req, res) => {
    const fileName = req.body.fileName;
    const filePath = `/Users/simoncole/fungiDB/fungi_db/public/${fileName}`;
    console.log("the file name given is: ", fileName);

    fs.unlink(filePath, (err) =>{
        if(err){
            console.log("there was an error: ", err);
            res.json({"status": 500})
        }
        else{
            console.log(`${fileName} was deleted from ${filePath}`);
            res.json({"status": 200});
        }
    });

});

app.post("/deleteJSONDownload", (req, res) => {
    const fileName = req.body.fileName;
    const filePath = `/Users/simoncole/fungiDB/fungi_db/public/${fileName}`;
    console.log("the file name given is: ", fileName);

    fs.unlink(filePath, (err) =>{
        if(err){
            console.log("there was an error: ", err);
            res.json({"status": 500})
        }
        else{
            console.log(`${fileName} was deleted from ${filePath}`);
            res.json({"status": 200});
        }
    });

});