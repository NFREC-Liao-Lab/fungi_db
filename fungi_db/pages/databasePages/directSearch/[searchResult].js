import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function searchResult(props){
    const router = useRouter();
    if(props.status === 500){
        router.push("/searchError");
    }

    const data = props.data;
    data.seqIDData.map((element, index) => {
        console.log(`Sequence ID: ${element.SeqID} Transporter: ${element.Transporter_id}`)
    })
    return(
        <div>
            <h1 className={styles.title}>{props.search}</h1>
            <ul>
                <li>Genome ID: {data.genomeData[0].Genome_id}</li>
                <li>Kingdom: {data.genomeData[0].kingdom}</li>
                <li>Phlyum: {data.genomeData[0].phylum}</li>
                <li>Class: {data.genomeData[0].class}</li>
                <li>Order: {data.genomeData[0].order}</li>
                <li>Family: {data.genomeData[0].family}</li>
                <li>Lifestyle: {data.genomeData[0].primary_lifestyle}</li>
                <li>Aquatic? {data.fungalTraitsData[0].Aquatic_habitat_template}</li>
                <li>Exploration type: {data.fungalTraitsData[0].Ectomycorrhiza_exploration_type_template}</li>
                {data.fungalTraitsData[0].Secondary_lifestyle && 
                    <li>{data.fungalTraitsData[0].Secondary_lifestyle}</li>
                }
            </ul>
                {data.seqIDData.map((element, index) => {
                    {<h5>
                    Sequence ID: {element.SeqID} Transporter: {element.Transporter_id}
                    </h5>}
                })}

        </div>


    );
}

export async function getServerSideProps(context){
    //search dbs for species
    //respond with data about species
    //display data
    try{
        const search = context.query.searchResult;


        const retrieveSpeciesDataOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"search": search}),
        }
        //post query to back end
        const res = await fetch("http://localhost:4000/retrieveSpeciesData", retrieveSpeciesDataOptions);
        const speciesData = await res.json();


        return{
            props: {
                "data": speciesData.data,
                "search": search,
            }
        }
    }
    catch(err){
        console.error(err);
        return{
            props:{"status": 500}
        }
    }
}