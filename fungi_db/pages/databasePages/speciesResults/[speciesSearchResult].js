import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styles from "../../../styles/Home.module.css";

export default function speciesSearchResult(props){
    const numberOfTransporters = 10;
    const speciesData = props.speciesData;

    //Full Taxonomy, GenomeID, Publication Link, JGI Link, Species Wikipedia Link, TaxID, 

    const transporterDensityLevel4 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_level4");
    const transporterDensityLevel5 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_id")


    //data for charts
    const level4PieData = {
        labels: transporterDensityLevel4.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensityLevel4.counts,
            backgroundColor: [
                'rgb(89, 41, 65)',
                'rgb(73, 132, 103)',
                'rgb(154, 152, 181)',
                'rgb(181, 248, 254)',
                'rgb(16, 255, 203)',
            ],
          }]
    };
    const level5PieData = {
        labels: transporterDensityLevel5.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensityLevel5.counts,
            backgroundColor: [
                'rgb(6, 141, 157)',
                'rgb(83, 89, 154)',
                'rgb(109, 157, 197)',
                'rgb(128, 222, 217)',
                'rgb(174, 236, 239)',
            ],
          }]
    };


    

    return(
        <div>
            <h1 className={styles.title}>
                {props.species}
            </h1>
            <div className={styles.transporterChartsWrapper}>
                <div className={styles.transporterChart}>
                    <h3>Genus Level Transporters</h3>
                    <Pie data={level4PieData}></Pie>
                </div>
                <div className={styles.transporterChart}>
                    <h3>Species Level Transporters</h3>
                    <Pie data={level5PieData}></Pie>
                </div>
                <div>
                    <h3 id={styles.tableTitle}>Full Species Transporter Gene Data</h3>
                    <table className={styles.resultsTable}>
                        <thead>
                            <tr>
                                <th className={styles.resultsTable}>Sequence ID</th>
                                <th className={styles.resultsTable}>Transporter ID</th>
                                <th className={styles.resultsTable}>Transporter Quantity</th>
                            </tr>
                        </thead>
                        {transporterDensityLevel5.tableData.map((element, index) => (
                            <tr key={index}>
                                <td className={styles.resultsTable}>{element.seqID}</td>
                                <td className={styles.resultsTable}>{element.transporter}</td>
                                <td className={styles.resultsTable}>{element.count}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context){
    const species = JSON.parse(context.query.species);

    const speciesDataOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "species": species,
        }),
    }

    //get data to display
    const res = await fetch("http://localhost:4000/retrieveSpeciesData", speciesDataOptions);
    const speciesData = await res.json();

    return{
        props: {
            "species": species,
            "speciesData": speciesData.data,
        }
    }
}

export function getTransporterDensity(originalData, numberOfTransporters, level){
    //Array of objects where each object has transporter value and number there are
    
    console.log(originalData[0][level]);
    //get array of transporters
    let transporters = [];
    originalData.map((element, index) => {
        transporters.push(element[level]);
    });

    //sort so matching transporters are next to each other
    transporters.sort();

    let data = [];
    for(let i = 0; i < transporters.length; i++){
        if(transporters[i] === transporters[i-1]){
            //if this transporter is the same as previous
            data[data.length-1].count += 1;
        }
        else{
            //if it's  a new transporter
            //get matching seqID
            let seqID;
            for(let j = 0; j < originalData.length; j++){
                if(originalData[j][level] === transporters[i]){
                    seqID = originalData[j].SeqID;
                }
            }
            let obj = {"transporter": transporters[i], "count": 1, "seqID": seqID};
            data.push(obj);
        }
    }

    //sort data by count
    data.sort((a, b) => (a.count < b.count) ? 1 : -1)
    for(let j = 300; j < data.length; j++){
        console.log(data[j])
    }


    //make table data that is array of objects that have props of seqID, transporterID, and quantity


    let finalDataObjects = [];
    // const stopCondition = data.length-(numberOfTransporters+1);
    for(let i = 0; i < numberOfTransporters; i++){
        finalDataObjects.push(data[i]);
    }

    let finalDataCounts = [];
    for(let i = 0; i < numberOfTransporters; i++){
        finalDataCounts.push(finalDataObjects[i].count);
    }

    let finalDataLabels = [];
    for(let i = 0; i < numberOfTransporters; i++){
        finalDataLabels.push(finalDataObjects[i].transporter);
    }    

    const finalData = {
        "labels": finalDataLabels,
        "counts": finalDataCounts,
        "tableData": data,
    }
    return finalData;
}