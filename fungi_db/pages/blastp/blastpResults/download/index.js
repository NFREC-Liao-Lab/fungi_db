import { useState } from "react";
import { httpQuery } from "..";
import { makeID } from "..";

export default function download(props){
    //delete files after download
    const [CSVDownloadStatus, setCSVDownloadStatus] = useState(false);
    const [JSONDownloadStatus, setJSONDownloadStatus] = useState(false);
    const [CSVDeleteLoadStatus, setCSVDeleteLoadStatus] = useState(false);
    const [JSONDeleteLoadStatus, setJSONDeleteLoadStatus] = useState(false);

    let csvFileName;
    async function deleteCSVDownload() {
        setCSVDownloadStatus(true);
        setCSVDeleteLoadStatus(true);
        try {
            const query = props.query;
            //make csv file
            console.log(props.fileName);
            csvFileName = await createDonwloadFile(query.primaryResults, query.supportingData, query.genomeInfo, query.numberOfSequences, query.queries, props.fileName);

            //call node backend
            const JSONStringFileName = JSON.stringify(fileName);
            console.log("fileName is: ", fileName);
            console.log("JsonString: ", JSONStringFileName);
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSONStringFileName,
            };
            const res = await fetch("http://localhost:4000/deleteCSVDownload", options);
            const resStatus = await res.json();
            console.log("res stat: ", resStatus);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setCSVDeleteLoadStatus(false);
        }
    }

    async function deleteJSONDownload() {
        //make JSON file
        const fileName = props.fileNames[0];
        const JSONdata = {
            "hanledData": query.handledData,
            "supportingData": query.supportingData,
            "genomeInfoKey": query.genomeInfoKey,
            "numberOfSequences": query.numberOfSequences,
            "queries": query.queries,
            "fileName": JSONFileName,
        }
        const stringJSONData = JSON.stringify(JSONdata);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: stringJSONData,
        }
        const res = await fetch("http://localhost:4000/makeJSONFile", options);
        const OutputJSONFileName = await res.json();


        setJSONDownloadStatus(true);
        setJSONDeleteLoadStatus(true);
        try {
            console.log("made it in here");
            //call node backend
            const fileName = { "fileName": props.JSONFileName };
            const JSONStringFileName = JSON.stringify(fileName);
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSONStringFileName,
            };
            const res = await fetch("http://localhost:4000/deleteJSONDownload", options);
            const resStatus = await res.json();
            console.log("res stat: ", resStatus);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setJSONDeleteLoadStatus(false);
        }
    }

    return(
        <div>
            <h1>Downlad Page</h1>
            {!CSVDownloadStatus && 
                <p>
                    Click <a href={`/${csvFileName}`} download onClick={
                        () => {
                            setTimeout(() => {
                            deleteCSVDownload();
                            }, 100)
                        }
                        }>here</a> to download results as csv
                </p>
            }
            {CSVDownloadStatus && 
                CSVDeleteLoadStatus &&
                <p>loading...</p>
            }
            {CSVDownloadStatus &&
                !CSVDeleteLoadStatus &&
                <p>Thanks for downloading!</p>
            }

            {!JSONDownloadStatus && 
                <p>
                    Click <a href={`/${props.JSONFileName}`} download onClick={
                        () => setTimeout(() => {
                            deleteJSONDownload();
                        }, 100)
                    }>here</a> to download results as JSON
                </p>
            }
            {JSONDownloadStatus && 
                JSONDeleteLoadStatus && 
                <p>loading...</p>
            }
            {JSONDownloadStatus &&
                <p>Thanks for downloading!</p>
            }
        </div>
    );
}


export async function getServerSideProps(context){
    //get data
    const ID = context.query.ID;
    const fileNames = JSON.parse(context.query.fileNames);
    const fileName = fileNames[0];
    const CSVFileName = convertJSONToCSVName(fileName);
    const IDString = JSON.stringify({"ID": ID});
    const sqlOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: IDString,
    }
    //get table data from sql db
    const sqlRes = await fetch("http://localhost:4000/getSQLData", sqlOptions);
    const queryObj = await sqlRes.json();
    const query = JSON.parse(queryObj.data);
    
    
    return {
        props: {
            "query": query,
            "JSONFileName": fileName,
            "CSVFileName": CSVFileName
        },
    }
}

export async function createDonwloadFile(handledData, supportingData, genomeInfoKey, numberOfSequences, queries, fileName){
    //create resultsDownload
    // console.log("handled data is", handledData);
    const downloadOptionsBody = JSON.stringify({
        results: handledData,
        supportingDataKey: supportingData,
        genomeInfoKey: genomeInfoKey,
        numberOfSequences: numberOfSequences,
        queries: queries,
        fileName: fileName,
    });
    const downloadOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: downloadOptionsBody,
    }
    const res = await fetch("http://localhost:3000/api/resultsDownload", downloadOptions);
    const filenameRes = await res.json();

    return filenameRes.filename;
}

export function convertJSONToCSVName(JSONFileName){
    let CSVFileName;
    for(let i = 0; i < JSONFileName.length; i++){
        if(JSONFileName.charAt(i) === "."){
            let tempFileName = JSONFileName.slice(0, i);
            CSVFileName = tempFileName + ".csv";
            return CSVFileName;
        }
    }
    console.log("error, . not found");
    return;
}

// export function convertCsvToJsonNames(fileNames){
//     const fileName = fileNames[0];
//     let newFileName;
//     let found = false;
//     for(let i = 0; i < fileName.length; i++){
//         if(fileName.charAt(i) === "."){
//             newFileName = fileName.slice(0, i);
//             newFileName += ".json";
//             found = true;
//         }
//     }
//     if(!found){
//         console.log("error, . not found in fileName");
//         return;  
//     }
//     else{
//         return newFileName;
//     }


// }