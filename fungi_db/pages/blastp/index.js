import styles from "../../styles/Home.module.css"
import BlastpSearch from "../../components/BlastpSearch";

export default function Blastp() {

    return(
        <main>
            <h1 className={styles.title}>Blastp</h1>
            <BlastpSearch/>
        </main>
    );
}

