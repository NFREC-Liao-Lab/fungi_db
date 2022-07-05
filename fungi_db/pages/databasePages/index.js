import Link from "next/link";
import styles from "../../styles/Home.module.css"

export default function databasePages(){
    //Filter by taxonomic level
    //Search by taxonomy
    return(
        <div>
            <h1 className={styles.title}>Search Our Database</h1>
            <p>Description here</p>
            <div className={styles.searchOptions}>
                <Link href="/databasePages/filterSearch"><a className={styles.button}>Filter by Taxonomy</a></Link>
                <br></br>
                <Link href="/databasePages/directSearch"><a className={styles.button}>Search Directly by Taxonomy</a></Link>
            </div>
        </div>

    );
}