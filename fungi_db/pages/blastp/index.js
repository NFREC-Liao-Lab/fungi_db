import styles from "../../styles/Home.module.css"
import BlastpSearch from "../../components/BlastpSearch";

// export async function getServerSideProps(){
//     const res = await fetch(defaultEndpoint)
//     const data = await res.json();

//     if (!data) {
//         return {
//             notFound: true
//         }
//     }

//     return {
//         props: { data }
//     }
// }

export default function Blastp() {
    return(
        <main>
            <h1 className={styles.title}>Blastp</h1>
            <BlastpSearch/>
        </main>
    );
}

