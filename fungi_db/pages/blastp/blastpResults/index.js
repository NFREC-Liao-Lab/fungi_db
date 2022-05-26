import GetBlastpResults from "../../../components/getBlastpResults";
import styles from "../../../styles/Home.module.css"

export default async function blastpResults(){
    return(
        <div>
            <h1 className={styles.title}>BlAST Search Results</h1>
            <p>The firstScore is: <GetBlastpResults /></p>
        </div>
    );

}

