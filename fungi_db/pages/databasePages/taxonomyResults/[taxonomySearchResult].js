import { useRouter } from "next/router";
import TaxonomyResultsTable from "../../../components/taxonomyResultsTable";
import styles from "../../../styles/Home.module.css";
import { useState } from "react";

//Display all the organisms in our database one taxonomic level below the search
//Clicking on an organism displays everything in one taxonomic level below that and so on until species
//Once species a species has been selected, display informatic data about that species
export default function searchResult(props){
    const router = useRouter();
    if(props.status === 500){
        router.push("/searchError");
    }

    //set these on click of option on page and call getNewData
    const [searchState, setSearchState] = useState(props.search);
    const [filtersState, setFiltersState] = useState(props.filters);
    const [taxonomyLevelState, setTaxonomyLevelState] = useState(props.taxonomyLevel);
    const [levelToDisplayState, setLevelToDisplayState] = useState(props.levelToDisplay)
    const [rankDataState, setRankDataState] = useState(props.rankData);

    async function getNewData(clickedFilter){
        //update search
        let newSearch = searchState.push(clickedFilter);
        setSearchState(newSearch);
        //update filters, adds old tax level
        let newFilters = filtersState.push(taxonomyLevelState);
        setFiltersState(newFilters);
        //update tax level
        setTaxonomyLevelState(levelToDisplayState);
        //update levelToDisplay
        if(taxonomyLevelState !== "species"){
            setLevelToDisplayState(getNextLevel(taxonomyLevel));
        }
        const rankData = await retrieveRankData(searchState, filtersState, taxonomyLevelState, levelToDisplayState);
        setRankDataState(rankData);
    }
    // const data = props.data;
    // const filters = props.filters;
    // const levelToDisplay = props.levelToDisplay;
    // const taxonomyLevel = props.taxonomyLevel;
    // const capitalizedTaxonomyLevel = capitalizeFirstLetter(taxonomyLevel);
    // const capitalizedLevelToDisplay = capitalizeFirstLetter(levelToDisplay);
    // const genomeData = removeNulls(data.genomeData, levelToDisplay);
    // const pluralizedTaxonomyLevelToDisplay = pluralizeTaxonomyLevel(capitalizedLevelToDisplay);
    // const search = props.search;
    return(
        <div>
            <h1 className={styles.title}>Select the Next Taxonomic Rank</h1>
            <div className={styles.taxonomyRunningName}>
            {
                    searchState.map((element, index) =>(
                        <p>{filtersState[index]}: {element},&nbsp;</p>
                    ))
            }
            </div>
            <div className={styles.taxonomyListWrapper}>
                <h4 className={styles.taxonomyListTitle}>Available</h4>
                <ul className={styles.taxonomyList}>
                    {
                        rankDataState.genomeData.map((element, index) => (
                            <div className={styles.taxonomyListItem}>
                                <div>
                                    <button onClick={() => {getNewData(element[levelToDisplayState])}}>
                                        <li>{element[levelToDisplayState]}</li>
                                    </button>
                                </div>
                                {/* <TaxonomyResultsTable search={searchState} filters={filtersState} data={element} taxonomyLevel={taxonomyLevelState}/> */}
                            </div>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
}

export async function getServerSideProps(context){
    try{
        let search = JSON.parse(context.query.search);
        let taxonomyLevel = context.query.taxonomyLevel;
        let filters = JSON.parse(context.query.filters);
        console.log("tax level: ", taxonomyLevel);

        filters.push(taxonomyLevel);
        let levelToDisplay;
        if(taxonomyLevel !== "species"){
            levelToDisplay = getNextLevel(taxonomyLevel);
        }
        console.log("levelToDisplay: ", levelToDisplay);
        const rankData = await retrieveRankData(search, filters, taxonomyLevel, levelToDisplay);

        return{
            props: {
                "rankData": rankData.data,
                "search": search,
                "taxonomyLevel": taxonomyLevel,
                "filters": filters,
                "levelToDisplay": levelToDisplay,
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

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getNextLevel(taxonomyLevel){
    const taxonomyLevels = ["phylum", "class", "order", "family", "genus", "species"];
    let levelToDisplay;
    console.log("taxLevel here: ", taxonomyLevel);
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
    else if(level === "Species"){
        pluralLevel = level;
    }
    else{
        pluralLevel = level + "s";
    }
    return pluralLevel;
}

export async function retrieveRankData(search, filters, taxonomyLevel, levelToDisplay){
    const retrieveRankDataOptions = {
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
    const res = await fetch("http://localhost:4000/retrieveTaxonomySearchData", retrieveRankDataOptions);
    const searchData = await res.json();

    return searchData;
}