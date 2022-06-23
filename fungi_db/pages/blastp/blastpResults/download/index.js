
export default function download(props){
    return(
        <div>
            <h1>Downlad Page</h1>
            <p>
                Click <a href={`/${props.fileName}`} download>here</a> to download results as csv
            </p>
            <p>
                Click <a href={`/${props.JSONFileName}`} download>here</a> to download results as JSON
            </p>
        </div>
    );
}


export async function getServerSideProps(context){
    //get data
    const query = JSON.parse(context.query.httpQuery);
    //make csv file
    const fileName = await createDonwloadFile(query.primaryResults, query.supportingData, query.genomeInfo, query.numberOfSequences, query.queries, query.fileNames);
    console.log("it is:", fileName);
    //make JSON file
    const JSONFileName = convertCsvToJsonNames(fileName)
    const JSONdata = {
        "hanledData": query.handledData,
        "supportingData": query.supportingData,
        "genomeInfoKey": query.genomeInfoKey,
        "numberOfSequences": query.numberOfSequences,
        "queries": query.queries,
        "fileName": JSONFileName,
    }
    const stringJSONData = JSON.stringify(JSONdata);
    console.log(stringJSONData);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringJSONData,
    }
    const res = await fetch("http://localhost:4000/makeJSONFile", options);
    const OutputJSONFileName = await res.json();
    console.log("out", OutputJSONFileName);
    return {
        props: {
            "fileName": fileName,
            "JSONFileName": OutputJSONFileName.fileName,
        },
    }
}

export async function createDonwloadFile(handledData, supportingData, genomeInfoKey, numberOfSequences, queries, fileNames){
    const fileName = fileNames[0];
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

export function convertCsvToJsonNames(fileName){
    let newFileName;
    let found = false;
    for(let i = 0; i < fileName.length; i++){
        if(fileName.charAt(i) === "."){
            newFileName = fileName.slice(0, i);
            newFileName += ".json";
            found = true;
        }
    }
    if(!found){
        console.log("error, . not found in fileName");
        return;  
    }
    else{
        console.log("newFileName is: ", newFileName);
        return newFileName;
    }


}