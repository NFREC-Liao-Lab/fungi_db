import styles from "../../styles/Home.module.css"
const defaultEndpoint = "http://localhost:4000/";

export default function Blastp() {
    const getRequest = async() => {
        const res = await fetch(defaultEndpoint, {
            method: 'POST',
            body: JSON.stringify({ data: "This here is the data" }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.JSON()
        console.log(data)
    }

    return(
        <main>
            <h1 className={styles.title}>Blastp</h1>
            <button onClick={ getRequest }>Get Request</button>
        </main>
    );
}

