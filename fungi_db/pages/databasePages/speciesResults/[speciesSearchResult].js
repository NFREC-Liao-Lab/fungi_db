import "chart.js/auto";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import TransporterTable from "../../../components/transporterTable";
import styles from "../../../styles/Home.module.css";


export default function speciesSearchResult(props){
    // onElementsClick={(e) => {
    //     console.log(e, 'e')
    // }}    


    const numberOfTransporters = 10;
    const speciesData = props.speciesData;
    //Full Taxonomy, GenomeID, Publication Link, JGI Link, Species Wikipedia Link; TaxID, Gene Size, 
    const transporterDensityLevel1 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_level1");
    const transporterDensityLevel2 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_level2");
    const transporterDensityLevel3 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_level3");
    const transporterDensityLevel4 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_level4");
    const transporterDensityLevel5 = getTransporterDensity(speciesData, numberOfTransporters, "Transporter_id")

    const [tableLevelState, setTableLevelState] = useState(
        {
            "selected": transporterDensityLevel5,
            "value": "Transporter Density Level 5"
        }   
     );


    //data for charts
    const level1PieData = {
        labels: transporterDensityLevel1.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensityLevel1.counts,
            backgroundColor: [
                'rgb(41, 47, 54)',
                'rgb(78, 205, 196)',
                'rgb(247, 255, 2471)',
                'rgb(255, 107, 107)',
                'rgb(255, 230, 109)',
            ],
          }]
    };
    const level2PieData = {
        labels: transporterDensityLevel2.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensityLevel2.counts,
            backgroundColor: [
                'rgb(89, 41, 65)',
                'rgb(73, 132, 103)',
                'rgb(154, 152, 181)',
                'rgb(181, 248, 254)',
                'rgb(16, 255, 203)',
            ],
          }]
    };
    const level3PieData = {
        labels: transporterDensityLevel3.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensityLevel3.counts,
            backgroundColor: [
                'rgb(72, 99, 156)',
                'rgb(76, 76, 157)',
                'rgb(113, 47, 121)',
                'rgb(151, 99, 145)',
                'rgb(116, 165, 127)',
            ],
          }]
    };
    const level4PieData = {
        labels: transporterDensityLevel4.labels,
        datasets: [{
            label: "transporters",
            data: transporterDensityLevel4.counts,
            backgroundColor: [
                'rgb(98, 144, 195)',
                'rgb(194, 231, 218)',
                'rgb(241, 255, 231)',
                'rgb(26, 27, 65)',
                'rgb(186, 255, 41)',
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

const handleLevelChange = e => {
        let choice = e.target.value;
        let level;
        switch(choice){
            case("level5"):
                level = transporterDensityLevel5;
                break;
            case("level4"):
                level = transporterDensityLevel4;
                break;
            case("level3"):
                level = transporterDensityLevel3;
                break;
            case("level2"):
                level = transporterDensityLevel2;
                break;
            case("level1"):
                level = transporterDensityLevel1;
                break;
            default:
                throw "not a valid transporter density level";
        }
        setTableLevelState({"selected": level, "value": choice});
    }

    return(
        <div>
            <h1 className={styles.title}>
                {props.species}
            </h1>

            <div className={styles.transporterDataWrapper}>
                <div className={styles.transporterChartsWrapperWrapper}>
                    <h2>10 Most Abundant Transporter Genes Distribution</h2>
                <div className={styles.transporterChartsWrapper}>
                        <div className={styles.transporterChart}>
                            <h3>Level 5 Transporters</h3>
                            <Pie data={level5PieData}></Pie>
                        </div>
                        <div className={styles.transporterChart}>
                            <h3>Level 4 Transporters</h3>
                            <Pie data={level4PieData}></Pie>
                        </div>
                        <div className={styles.transporterChart}>
                            <h3>Level 3 Transporters</h3>
                            <Pie data={level3PieData}></Pie>
                        </div>
                        <div className={styles.transporterChart}>
                            <h3>Level 2 Transporters</h3>
                            <Pie data={level2PieData}></Pie>
                        </div>
                        <div className={styles.transporterChart}>
                            <h3>Level 1 Transporters</h3>
                            <Pie data={level1PieData}></Pie>
                        </div>
                    </div>
                </div>
                <div className={styles.transporterTableWrapper}>
                    <select className={styles.button}
                        onChange={handleLevelChange}
                        value={tableLevelState.value}
                    >
                        <option value="level5">Transporter Level 5</option>
                        <option value="level4">Transporter Level 4</option>
                        <option value="level3">Transporter Level 3</option>
                        <option value="level2">Transporter Level 2</option>
                        <option value="level1">Transporter Level 1</option>
                    </select>
                    <h3 id={styles.tableTitle}>Full Species Transporter Gene Data</h3>
                    <TransporterTable transporterDensity={tableLevelState.selected}></TransporterTable>
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

    //make table data that is array of objects that have props of seqID, transporterID, and quantity

    //if the number of unique transporters is less than numberOfTransporters
    if(data.length < numberOfTransporters){
        numberOfTransporters = data.length;
    }

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