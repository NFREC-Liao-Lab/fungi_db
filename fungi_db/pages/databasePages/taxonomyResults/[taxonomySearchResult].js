import { filter } from "d3";
import { useRouter } from "next/router";
import TaxonomyResultsTable from "../../../components/taxonomyResultsTable";
import styles from "../../../styles/Home.module.css";


//Display all the organisms in our database one taxonomic level below the search
//Clicking on an organism displays everything in one taxonomic level below that and so on until species
//Once species a species has been selected, display informatic data about that species
export default function searchResult(props){
    const router = useRouter();
    if(props.status === 500){
        router.push("/searchError");
    }

    const data = props.data;
    const filters = props.filters;
    const levelToDisplay = props.levelToDisplay;
    const taxonomyLevel = props.taxonomyLevel;
    const capitalizedTaxonomyLevel = capitalizeFirstLetter(taxonomyLevel);
    const capitalizedLevelToDisplay = capitalizeFirstLetter(levelToDisplay);
    const unduplicatedData = removeDuplicates(data.genomeData, levelToDisplay);
    const pluralizedTaxonomyLevelToDisplay = pluralizeTaxonomyLevel(capitalizedLevelToDisplay);
    console.log("data: ", unduplicatedData);
    return(
        <div>
            <h1 className={styles.title}>{capitalizedTaxonomyLevel}: {props.search}</h1>

            <h4>{pluralizedTaxonomyLevelToDisplay} in our database:</h4>
            <ul>
                {
                    unduplicatedData.map((element) => (
                        <TaxonomyResultsTable filters={filters} data={element} levelToDisplay={levelToDisplay}/>
                    ))
                }
            </ul>

        </div>
    );
}

export async function getServerSideProps(context){
    try{
        const search = context.query.search;
        let taxonomyLevel = context.query.taxonomyLevel;
        let filters = context.query.filters;
        
        console.log(filters);
        if(filters[0] === "none"){
            filters[0] = taxonomyLevel;
        }
        else if(filters[1] === "none"){
            filters[1] = taxonomyLevel;
        }
        else{
            filters.push(taxonomyLevel);
        }

        console.log("tax level: ", taxonomyLevel);

        let levelToDisplay = getNextLevel(taxonomyLevel);

        const retrieveSpeciesDataOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "search": search,
                "taxonomyLevel": taxonomyLevel,
                "levelToDisplay": levelToDisplay,
                "filters": filters,
            }),
        }
        //post query to back end
        const res = await fetch("http://localhost:4000/retrieveTaxonomySearchData", retrieveSpeciesDataOptions);
        const searchData = await res.json();

        return{
            props: {
                "data": searchData.data,
                "search": search,
                "levelToDisplay": levelToDisplay,
                "taxonomyLevel": taxonomyLevel,
                "filters": filters,
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

export function removeDuplicates(data, levelToDisplay){
    let unduplicatedData = [];
    data.map((element) => {
        //if new array contains, don't add
        let found = false
        //see if curr element is already in unduplicated
        for(let i = 0; i < unduplicatedData.length; i++){
            if(unduplicatedData[i][levelToDisplay] === element[levelToDisplay]){
                found = true;
            }
        }
        if(!found){
            unduplicatedData.push(element);
        }
    })

    console.log(unduplicatedData);
    return unduplicatedData;
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getNextLevel(taxonomyLevel){
    const taxonomyLevels = ["phylum", "class", "order", "family", "genus"];
    let levelToDisplay;
    //select the taxonomy level after the searched level
    taxonomyLevels.map((element, index) =>{
        if(element === taxonomyLevel){
            levelToDisplay = taxonomyLevels[index + 1];       
    }
    });
    if(!levelToDisplay){
        throw "taxonomy level is not valid";
    }
    return levelToDisplay;
    
}   

export function pluralizeTaxonomyLevel(level){
    let pluralLevel;
    if(level === "Genus" || level === "Class"){
        pluralLevel = level + "es";
    }
    else if(level === "Family"){
        level = level.slice(0, (level.length)-1)
        pluralLevel = level + "ies";
    }
    else{
        pluralLevel = level + "s";
    }
    return pluralLevel;
}