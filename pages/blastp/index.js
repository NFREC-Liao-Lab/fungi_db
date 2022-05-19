import styles from "../../styles/Home.module.css"
import GetRequest from "../../components/getRequest";
const defaultEndpoint = "http://localhost:4000/";


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

export default function Blastp({ resJson }) {
    console.log("resJson is: " + resJson);
    return(
        <main>
            <h1 className={styles.title}>Blastp</h1>
            <button onClick={ GetRequest }>Get Request</button>
        </main>
    );
}

