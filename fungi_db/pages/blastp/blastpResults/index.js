import ResultsTable from "../../../components/resultsTable";
import styles from "../../../styles/Home.module.css";
import Router, { useRouter } from "next/router";
import { numberOfResults } from "../..";
//2254
// "integrity": "sha512-3XY9e1pP0CVEUCdj5BmfIZxRBTSDycnbqhIOGec9QYtmVH2fbLpj86CFWkrNOkt/Fvty4KZG5lTglL9j/gJ87w=="

/*In future subject sequence ID
Taxonomy ID
Lifestyle
In Future Transport ID with link to our site
*/
export const numberOfCategories = 5;

export default function blastPResults(props){
    const supportingData = props.supportingDataKey;
    const genomeInfo = props.genomeInfoKey;
    const numberOfSequences = props.numberOfSequences;
    let queries = props.queries;
    let primaryResults = props.results;
    let primaryData = formatPrimaryData(primaryResults, numberOfSequences);


    return(
        <div>
            <h1 className={styles.title}>BLAST Search Results</h1>
            {primaryData.map((table, index) =>{
                return(
                    <div key={index} className={styles.table}>
                    <ResultsTable key={index} data={table} supportingData={supportingData[index]} genomeInfo={genomeInfo[index]} query={queries[index]}/>
                    </div>
                );
            })}
            {/* <ResultsTable data={resultsTableProps}/> */}
        </div>
    );

}

export async function getServerSideProps(context) {
    const numberOfSequences = context.query.numberOfSequences;
    let queries;
    if(typeof(context.query.queries) === "string"){
        queries = [];
        queries.push(context.query.queries);
    }
    else{
        queries = context.query.queries;
    }
    //Get fileNames from next api
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({"numberOfSequences": numberOfSequences}),
    }

    const res1 = await fetch("http://localhost:3000/api/getFileNames", options);
    const fileNames = await res1.json();

    //Post fileNames and numberOfSequences to node backend
    const jsonBody = {"numberOfSequences": numberOfSequences, "fileNames": fileNames};
    const options2 = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonBody),
    }

    const response = await fetch("http://localhost:4000", options2);
    const data = await response.json();

    //Get data from node backend
    const getResponse = await fetch("http://localhost:4000");
    const fileData = await getResponse.json();

    let handledData = await handleData(fileData.data, numberOfSequences);

    //get sequenceIds with primaryData
    const seqIds = await getSeqIds(handledData, numberOfSequences);
    let theBody = {
        "seqIds": seqIds,
        "numberOfSequences": numberOfSequences
    }
    let stringTheBody = JSON.stringify(theBody);

    const supportingDataOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: stringTheBody,
        }
    
    //fetch supportingData with seqIds
    const res2 = await fetch("http://localhost:3000/api/supportingData", supportingDataOptions);
    const supportingData = await res2.json();

    const genomeIds = getGenomeIds(supportingData, numberOfSequences);
    let theBody2 = {
        "genomeIds": genomeIds,
        "numberOfSequences": numberOfSequences,
    }
    let stringTheBody2 = JSON.stringify(theBody2);


    const options3 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringTheBody2,
      }

    //fetch genomeInfo
    const res3 = await fetch("http://localhost:3000/api/genomeInfo", options3);
    const genomeInfo = await res3.json();
    
    
    let genomeInfoBeauty = beautifyGenomeInfo(genomeInfo, numberOfSequences);


    return{
        props: {
            results: handledData,
            supportingDataKey: supportingData,
            genomeInfoKey: genomeInfoBeauty,
            numberOfSequences: numberOfSequences,
            queries: queries,
        }
    }

    }

export async function getSeqIds(data, numberOfSequences){
    let seqIds = [];
    for(let i = 0; i < numberOfSequences; i++){
        seqIds.push(data.sequenceIDs[i]);
        // JSON.stringify(seqIds[i]);
    }
    return seqIds;
}
export function getGenomeIds(supportingData, numberOfSequences){
    let genomeIds = [];
    let tempGenomeIds = [];
    for(let j = 0; j < numberOfSequences; j++){
        for(let i = 0; i < numberOfResults; i++){
            tempGenomeIds[i] = supportingData[j][i][0].Genome_id;
        }
        genomeIds.push(tempGenomeIds);
    }
    return genomeIds;
}
export function beautifyGenomeInfo(genomeInfo, numberOfSequences){
    for(let i = 0; i < numberOfSequences; i++){
        for(let j = 0; j < numberOfResults; j++){
            genomeInfo[i][j][0].primary_lifestyle = genomeInfo[i][j][0].primary_lifestyle.replaceAll("_", " ");
        }
    }
    return genomeInfo;
}

export async function handleData(data, numberOfSequences){
    //get the data needed from file
    let sequenceID2d = [];
    let totalScore2d = [];
    let queryCoverage2d = [];
    let eValue2d = [];
    let identityValue2d = [];
    for(let i = 0; i < numberOfSequences; i++){
        let sequenceID = [];
        let totalScore = [];
        let queryCoverage = [];
        let eValue = [];
        let identityValue = [];
        for(let j = 0; j < numberOfResults; j++){
            sequenceID[j] = data[i].queries[0].hits[j].id;
            totalScore[j] = data[i].queries[0].hits[j].total_score;
            queryCoverage[j] = data[i].queries[0].hits[j].qcovs;
            eValue[j] = data[i].queries[0].hits[j].hsps[0].evalue;
            identityValue[j] = data[i].queries[0].hits[j].hsps[0].identity;
        }
        sequenceID2d.push(sequenceID);
        totalScore2d.push(totalScore);
        queryCoverage2d.push(queryCoverage);
        eValue2d.push(eValue);
        identityValue2d.push(identityValue);
    }
    const handledData = {
        "sequenceIDs": sequenceID2d,
        "totalScores": totalScore2d,
        "queryCoverages": queryCoverage2d,
        "eValues": eValue2d,
        "identityValues": identityValue2d,
    }
    return handledData;
}

export function formatPrimaryData(results, numberOfSequences){
    let data = [];
    for(let i = 0; i < numberOfSequences; i++){
        let dataToBePassed = [];
        let subDataToBePassed = [];
        let newDataToBePassed = [];
        for(let j = 0; j < numberOfResults; j++){
            subDataToBePassed.push({"sequenceID": results.sequenceIDs[i][j]});
            subDataToBePassed.push({"totalScore": results.totalScores[i][j]});
            subDataToBePassed.push({"queryCoverage": results.queryCoverages[i][j]});
            subDataToBePassed.push({"eValue": results.eValues[i][j]});
            subDataToBePassed.push({"identityValue": results.identityValues[i][j]});
        }
        let subArray = [];
        subDataToBePassed.map((item, index) => {
            let tempLength = subDataToBePassed.length;
            if(index % numberOfCategories === 0 && index !== 0){
                dataToBePassed.push(subArray);
                subArray = [];
            }
            subArray.push(item);
            if(index === --(tempLength)){
                dataToBePassed.push(subArray);
                return;
            }
        });
        dataToBePassed.map((arrayElement) => {
            let obj = {};
            for(let i = 0; i < numberOfCategories; i++){
                let key = Object.keys(arrayElement[i]);
                obj[key[0]] = arrayElement[i][key[0]];
            }
            newDataToBePassed.push(obj);
        });
        data.push(newDataToBePassed);
    }
    return data;
}
