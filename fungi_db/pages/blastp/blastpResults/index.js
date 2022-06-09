import ResultsTable from "../../../components/resultsTable";
import styles from "../../../styles/Home.module.css";
import Router, { useRouter } from "next/router";

/*In future subject sequence ID
Taxonomy ID
Lifestyle
In Future Transport ID with link to our site
*/

export default function blastPResults(props){
    const router = useRouter();

    let resultsTableProps = [props.results, props.supportingDataKey];
    return(
        <div>
            <h1 className={styles.title}>BLAST Search Results</h1>
            <p className={styles.userQuery}>The Query was: {router.query.query}</p>
            <ResultsTable data={resultsTableProps}/>
            
        </div>
    );

}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/getRequest');
    const data = await res.json();

    const seqIds = await getSeqIds(data);
    let theBody = {
        "seqIds": seqIds
    }
    let stringTheBody = JSON.stringify(theBody);

    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringTheBody,
      }

    const res2 = await fetch("http://localhost:3000/api/supportingData", options);
    const supportingData = await res2.json();

    return{
        props: {
            results: data,
            supportingDataKey: supportingData,
        }
    }

}

export async function getSeqIds(data){
    let seqIds = [];
    for(let i = 0; i < 10; i++){
        seqIds[i] = data[i].sequenceID;
        JSON.stringify(seqIds[i]);
    }
    return seqIds;
}