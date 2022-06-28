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
    const tableData = JSON.stringify(req.body.tableData);
    try{
        let theQuery = "INSERT INTO resultsTableData(ID, tableData) VALUES (?, ?)"
        connection.query(theQuery, [ID, tableData], function (error, results, fields){
            if(error) throw error;
            else res.status(200).json({});
        });
    }
    catch(error){
        console.log("there was an error: ", error);
        res.status(500).json({});
    }
})

app.post("/getSQLData", (req, res) => {
    const ID = req.body.ID;
    console.log(ID);
    let theQuery = "SELECT tableData FROM resultsTableData WHERE ID=?;";
    try{
        connection.query(theQuery, [ID], function (error, results, fields){
            if(error) throw error;
            else{ 
                const data = results[0].tableData;
                res.status(200).json({"data": data});
            };
        });
    }
    catch(error){
        console.log("There was an error ", error);
        res.status(500).json({});
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
    res.status(200).json({});
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
    res.status(200).json({"fileName": fileName});
});

app.post("/deleteCSVDownload", (req, res) => {
    const fileName = req.body.fileName;
    const filePath = `/Users/simoncole/fungiDB/fungi_db/public/${fileName}`;
    try{
        if(fileName.charAt(0) === "2" && fileName.charAt(1) === "0"){
            console.log("the file name given is: ", fileName);

            fs.unlink(filePath, (err) =>{
                if(err){
                    throw err;
                }
                else{
                    console.log(`${fileName} was deleted from ${filePath}`);
                    res.json({"status": 200});
                }
            });
        }
        else{
            throw "The csv file sent to delete is not the correct one";
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({});
    }
});

app.post("/deleteJSONDownload", (req, res) => {
    const fileName = req.body.fileName;
    const filePath = `/Users/simoncole/fungiDB/fungi_db/public/${fileName}`;
    console.log("the file name given is: ", fileName);
    try{
        if(fileName.charAt(0) === "2" && fileName.charAt(1) === "0"){
            fs.unlink(filePath, (err) =>{
                if(err){
                    throw err;
                }
                else{
                    console.log(`${fileName} was deleted from ${filePath}`);
                    res.status(200).json({});
                }
            });
        }
        else{
            throw "the json file sent to delete is not the correct file";
        }
    }
    catch(err){
        console.err(err);
        res.status(500).json({})
    }

});

app.post("/deleteSSResults", (req, res) =>{
    const fileNames = req.body.fileNames;
    console.log("the filenames is: ", fileNames);
    try{
        for(let i = 0; i < fileNames.length; i++){
            const fileName = fileNames[i];
            if(fileName.charAt(0) === "2" && fileName.charAt(1) === "0"){
                const filePath = "/Users/simoncole/fungiDB/fungi_db/" + fileName;
                fs.unlink(filePath, (err) => {
                    if(err){
                        throw err;
                    }
                    else{
                        console.log(`${fileName} was deleted from ${filePath}`);
                    }
                });
            }
            else{
                throw "The file sent to delete is not the correct one";
            }
        }
        res.status(200).json({});
    }
    catch(err){
        console.error(err);
        res.status(500).json({});
    }
});