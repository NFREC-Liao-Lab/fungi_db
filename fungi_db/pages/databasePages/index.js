import Link from "next/link";
import styles from "../../styles/Home.module.css"

export default function databasePages(){
    //Search by taxonomic level
    //Search by binomial nomenclature
    return(
        <div>
            <h1 className={styles.title}>Search Our Database</h1>
            <p>Description here</p>
            <Link href="/databasePages/filterSearch"><a className={styles.dbSearchOption}>Filter by Taxonomy</a></Link>
            <br></br>
            <Link href="/databasePages/directSearch"><a className={styles.dbSearchOption}>Search by Binomial Nomenclature</a></Link>
        </div>

    );
}