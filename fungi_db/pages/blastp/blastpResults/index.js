import ResultsTable from "../../../components/resultsTable";
import styles from "../../../styles/Home.module.css"

export default function blastPResults({ results }){
    console.log(results);
    return(
        <div>
            <h1 className={styles.title}>BlAST Search Results</h1>
            {/* {results.map((result) => {
            return(
                <div key={result.id}>
                    {result.id} {result.sequenceID} {result.totalScore} {result.queryCoverage} {result.eValue} {result.identityValue} 
                </div>
            );
            })} */}
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

