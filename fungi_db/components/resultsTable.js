import styles from "../styles/Home.module.css"

export default function ResultsTable(props) {
    let data = props.data;
    return (
        <div>
            <table className={styles.resultsTable}>
                <thead>
                    <tr>
                        <th className={styles.resultsTable}>Subject Sequence ID</th>
                        <th className={styles.resultsTable}>Total Score</th>
                        <th className={styles.resultsTable}>Query Coverage</th>
                        <th className={styles.resultsTable}>E value</th>
                        <th className={styles.resultsTable}>Identity Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dataCategory, index) =>{
                            return(
                                <tr key={index}>
                                    <td className={styles.resultsTable}>{dataCategory.sequenceID}</td>
                                    <td className={styles.resultsTable}>{dataCategory.totalScore}</td>
                                    <td className={styles.resultsTable}>{dataCategory.queryCoverage}</td>
                                    <td className={styles.resultsTable}>{dataCategory.eValue}</td>
                                    <td className={styles.resultsTable}>{dataCategory.identityValue}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}