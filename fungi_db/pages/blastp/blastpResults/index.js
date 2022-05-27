import styles from "../../../styles/Home.module.css"

export default function blastPResults({ results }){
    return(
        <div>
            <h1 className={styles.title}>BlAST Search Results</h1>
            {results.map((result) => {
            return(
                <div key={result.id}>
                    {result.id} {result.nsequences} {result.firstScore}
                </div>
            );
            })}
            
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

