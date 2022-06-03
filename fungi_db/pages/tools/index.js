import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export default function Tools() {
    return(
        <main className={ styles.main }>

            <h1 className={styles.title}>
                Tools
            </h1>

            <div className={styles.grid}>
            <Link href="/blastn">
                <a className={styles.card}>
                <h2>Sample Tool &rarr;</h2>
                <p>Some description here</p>
                </a>
            </Link>

            <Link href="/blastx">
                <a className={styles.card}>
                <h2>Sample Tool &rarr;</h2>
                <p>Some description here</p>
                </a>
            </Link>

            <Link href="/tblastn">
                <a className={styles.card}>
                <h2>Sample Tool &rarr;</h2>
                <p>Some description here</p>
                </a>
            </Link>

            <Link href="/blastp">
                <a className={styles.card}>
                <h2>Protein Blast &rarr;</h2>
                <p>Some description here</p>
                </a>
            </Link>

            </div>
        </main>
    );
}