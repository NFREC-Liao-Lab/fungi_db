import Image from "next/image";
import styles from "../styles/Home.module.css";
import mushroomIcon from "../public/mushroomIcon.png";


export default function Searching(){
    return(
        <div className={styles.searchingPage}>
            <div className={styles.searching}>
                <p>Searching...</p>
            </div>
        </div>
    );
}