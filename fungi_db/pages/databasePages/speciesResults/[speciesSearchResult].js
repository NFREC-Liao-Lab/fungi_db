import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styles from "../../../styles/Home.module.css";

export default function speciesSearchResult(props){
    const numberOfTransporters = 5;
    const speciesData = props.speciesData;

    const transporterDensity = getTransporterDensity(speciesData, numberOfTransporters);
    console.log(transporterDensity.labels)
    console.log(transporterDensity.counts)
    const pieData = {
        labels: transporterDensity.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensity.counts,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
          }]
    };

    

    return(
        <div>
            <h1>
                {props.species}
            </h1>
            <div className={styles.transporterChart}>
                <Pie data={pieData}></Pie>
            </div>

            <div>
                <table>
                    {speciesData.map((element, index) => (
                        <tr key={index}>
                            <td>{element.SeqID}</td>
                            <td>{element.Transporter_level4}</td>
                        </tr>
                    ))}
                </table>
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

export function getTransporterDensity(data, numberOfTransporters){
    //Array of objects where each object has transporter value and number there are
    //get array of transporters
    let transporters = [];
    data.map((element, index) => {
        transporters.push(element.Transporter_level4);
    });

    //sort so matching transporters are next to each other
    transporters.sort();

    data = [];
    for(let i = 0; i < transporters.length; i++){
        if(transporters[i] === transporters[i-1]){
            //if this transporter is the same as previous
            data[data.length-1].count += 1;
        }
        else{
            //if it's  a new transporter
            let obj = {"transporter": transporters[i], "count": 1};
            data.push(obj);
        }
    }

    //sort data by count
    data.sort((a, b) => (a.count > b.count) ? 1 : -1)
    // for(let j = 300; j < data.length; j++){
    //     console.log(data[j])
    // }

    let finalDataObjects = [];
    const stopCondition = data.length-(numberOfTransporters+1);
    for(let i = data.length-1; i > stopCondition; i--){
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
    }
    return finalData;
}