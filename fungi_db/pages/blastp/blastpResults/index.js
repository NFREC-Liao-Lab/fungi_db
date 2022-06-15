import ResultsTable from "../../../components/resultsTable";
import styles from "../../../styles/Home.module.css";
import Router, { useRouter } from "next/router";
import { numberOfResults } from "../../api/primaryData";

//2254
// "integrity": "sha512-3XY9e1pP0CVEUCdj5BmfIZxRBTSDycnbqhIOGec9QYtmVH2fbLpj86CFWkrNOkt/Fvty4KZG5lTglL9j/gJ87w=="

/*In future subject sequence ID
Taxonomy ID
Lifestyle
In Future Transport ID with link to our site
*/

export default function blastPResults(props){
    const router = useRouter();

    const numberOfSequences = props.numberOfSequences;

    let resultsTableProps = [props.results, props.supportingDataKey, props.genomeInfoKey];
    return(
        <div>
            <h1 className={styles.title}>BLAST Search Results</h1>
            {/* <ResultsTable data={resultsTableProps}/> */}
            
        </div>
    );

}

export async function getServerSideProps(context) {
    const numberOfSequences = context.query.numberOfSequences;
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
    console.log("filenames are: ", fileNames);
    
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
    console.log(data);

    //Get data from node backend
    const getResponse = await fetch("http://localhost:4000");
    const fileData = await getResponse.json();

    handleData(fileData.data, numberOfSequences);
    
    // const seqIds = await getSeqIds(data, numberOfSequences);
    // let theBody = {
    //     "seqIds": seqIds,
    //     "numberOfSequences": numberOfSequences
    // }
    // let stringTheBody = JSON.stringify(theBody);

    // const supportingDataOptions = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: stringTheBody,
    //   }

    // const res2 = await fetch("http://localhost:3000/api/supportingData", supportingDataOptions);
    // const supportingData = await res2.json();

    // console.log("supporting data is: ", supportingData);

    // const genomeIds = getGenomeIds(supportingData, numberOfSequences);

    // let theBody2 = {
    //     "genomeIds": genomeIds
    // }
    // let stringTheBody2 = JSON.stringify(theBody2);

    // console.log("string the body 2: ", stringTheBody2);

    // const options3 = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: stringTheBody2,
    //   }

    // const res3 = await fetch("http://localhost:3000/api/genomeInfo", options3);
    // const genomeInfo = await res3.json();
    
    // let genomeInfoBeauty = beautifyGenomeInfo(genomeInfo);


    return{
        props: {
            // results: data,
            // supportingDataKey: supportingData,
            // genomeInfoKey: genomeInfoBeauty,
            // numberOfSequences: numberOfSequences,
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
export function beautifyGenomeInfo(genomeInfo){
    for(let i = 0; i < numberOfResults; i++){
        genomeInfo[i][0].primary_lifestyle = genomeInfo[i][0].primary_lifestyle.replaceAll("_", " ");
    }
    return genomeInfo;
}

export function handleData(data, numberOfSequences){
    // let sequenceID2d = [];
    // let totalScore2d = [];
    // let queryCoverage2d = [];
    // let eValue2d = [];
    // let identityValue2d = [];
    for(let i = 0; i < numberOfSequences; i++){
        for(let j = 0; j < numberOfResults; j++){
           console.log(`postion ${i} results ${j}:: `, data[i].queries[0].hits[j]);
        }
    }


}