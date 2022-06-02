import ResultsTable from "../../../components/resultsTable";
import styles from "../../../styles/Home.module.css";
import Router, { useRouter } from "next/router";

export default function blastPResults({ results }){
    const router = useRouter();
    console.log(router.query);
    console.log(results);
    return(
        <div>
            <h1 className={styles.title}>BLAST Search Results</h1>
            <p className={styles.userQuery}>The Query was: {router.query.query}</p>
            <ResultsTable data={results}/>
            
        </div>
    );

}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/getRequest');
    const data = await res.json();

    return{
        props: {
            results: data
        }
    }

}

