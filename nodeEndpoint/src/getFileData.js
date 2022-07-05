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

const numberOfResults = 10;

var mysql = require('mysql');
const util = require('util');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '79037197',
  database : 'fungidb'
});
connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    };
    console.log("connected as... " + connection.threadId);
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

app.post("/getGenomeInfo", async (req, res) => {
    try{
        const genomeIds = req.body.genomeIds;
        const numberOfSequences = req.body.numberOfSequences;
        let results2d = [];
        for(let i = 0; i < numberOfSequences; i++){
            let results = [];
            for(let j = 0; j < numberOfResults; j++) {
                let genomeSQLQuery = "SELECT Species, primary_lifestyle FROM genomesInfo WHERE Genome_id=?";
                results[j] = await connection.query(genomeSQLQuery, [genomeIds[i][j]]);
                console.log("results sub j", results[j]);
            }
            console.log("results are: ", results);
            results2d.push(results);
        }
        res.status(200).json(results2d);
    }
    catch(err){
        res.status(500).json({})
    }
});

app.post("/getSupportingData", async (req, res) => {
    try{
        // const body = JSON.parse(req.body);
        const seqIds = req.body.seqIds;
        const numberOfSequences = req.body.numberOfSequences;
        const results = [];
        for(let j = 0; j < numberOfSequences; j++){
            let tempResults = [];
            for(let i = 0; i < numberOfResults; i++){
                let supportingDataQuery = "SELECT Transporter_id, Genome_id FROM proteinSeqID WHERE SeqID=?";
                tempResults[i] = await connection.query(supportingDataQuery, [seqIds[j][i]]);
            }
            results.push(tempResults);
        }
        return res.status(200).json(results);
    }
    catch (e){
        res.status(500).json({message: e.message})
    }
});

app.post("/retrieveTaxonomySearchData", async (req, res) => {
    try{
        let search = req.body.search;
        let taxonomyLevel = req.body.taxonomyLevel;
        let levelToDisplay = req.body.levelToDisplay;
        let filters = req.body.filters;

        console.log("filters are: ", filters);

        if(taxonomyLevel == "order"){
            taxonomyLevel = "orderColumn";
        }
        else if(levelToDisplay == "order"){
            levelToDisplay = "orderColumn"
        }

        let speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE "

        // //loop through filters and create WHERE portion of query
        // for(let i = 0; i < filters.length; i++){
        //     if(filters[i] !== "none" && i !== filters.length-2){
        //         speciesGenomeSQLQueryWhere += filters[i] + " && "
        //     }
        //     else if(filters[i] !== "none"){

        //     }

        // }

        //get data from genome db
        switch(taxonomyLevel) {
            case "phylum":
                speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE phylum=?;";
                break;
            case "class":
                speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE class=?;";
                break;
            case "orderColumn":
                speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE orderColumn=?;";
                break;
            case "family":
                speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE family=?;";
                break;
            case "genus":
                speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE genus=?;";
                break;
            case "Species":
                speciesGenomeSQLQueryWhere = " FROM genomesInfo WHERE Species=?;";
                break;
            default:
                throw `${taxonomyLevel} is not a valid taxonomic level`
        }

        const speciesGenomeSQLQuery = "SELECT " + levelToDisplay + speciesGenomeSQLQueryWhere;

        const genomeData = await connection.query(speciesGenomeSQLQuery, [search]);
        // const genomeID = genomeData[0].Genome_id;

        // //get data from seqID db
        // let speciesSeqIDSQLQuery = "SELECT SeqID, Transporter_id FROM proteinSeqID WHERE Genome_id=?";
        // const seqIDData = await connection.query(speciesSeqIDSQLQuery, [genomeID])

        // //get data from fungal traits db using genus
        // let fungalTraitsSQLQuery = "SELECT Aquatic_habitat_template, Ectomycorrhiza_exploration_type_template, Secondary_lifestyle FROM fungalTraits WHERE genus=?";
        // const fungalTraitsData = await connection.query(fungalTraitsSQLQuery, [genus]);

        const data = {
            "genomeData": genomeData,
            // "seqIDData": seqIDData,
            // "fungalTraitsData": fungalTraitsData,
        }
        res.status(200).json({"data": data});
    }
    catch(err){
        console.error(err);
        res.status(500).json({});
    }
});

function getGenus(species){
    let genus;
    for(let i = 0; i < species.length; i++){
        if(species.charAt(i) === " "){
            genus = species.slice(0, i);
            return genus;
        }
    }
    throw "Space not found";
}