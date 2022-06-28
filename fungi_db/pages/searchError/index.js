import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function searchError(){
    return(
        <div>
            <h1 className={styles.title}>There was an error in your search</h1>
            <ul>
                <li>This is likely due to your input formatting</li> 
                <li>Click <Link href="/searchError/exampleSearch">here</Link> to see an example of a valid search.</li>
                <li>Click <Link href="/blastp">here</Link> to make another search.</li>
            </ul>
            
        </div>
    );
}