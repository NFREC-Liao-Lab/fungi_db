import { createTable } from 'react-table'
import styles from "../styles/Home.module.css"

export default function ResultsTable(props) {
    let data = props.data;
    return (
        <div className={styles.resultsTable}>
            <table>
                <thead>
                    <tr>
                        <th>Subject Sequence ID</th>
                        <th>Total Score</th>
                        <th>Query Coverage</th>
                        <th>E value</th>
                        <th>Identity Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dataCategory, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{dataCategory.sequenceID}</td>
                                    <td>{dataCategory.totalScore}</td>
                                    <td>{dataCategory.queryCoverage}</td>
                                    <td>{dataCategory.eValue}</td>
                                    <td>{dataCategory.identityValue}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}