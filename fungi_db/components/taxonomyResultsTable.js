import Link from "next/link";
import { getNextLevel } from "../pages/databasePages/taxonomyResults/[taxonomySearchResult]";



export default function TaxonomyResultsTable(props){
    const element = props.data;
    const levelToDisplay = props.levelToDisplay;
    let nextLevelPath;
    let filters = props.filters;
    let filtersJSON = JSON.stringify(props.filters);
    let search = props.search;
    let numberOfFilters = filters.length;
    console.log("element is: ", element);
    //reset search to only jave the previous searches, not results
    let newSearch = [];
    for(let i = 0; i < numberOfFilters; i++){
        newSearch.push(search[i]);
    }
    search = newSearch;
    search.push(element[levelToDisplay]);
    console.log("search after is: ", search);
    let searchJSON = JSON.stringify(search);


    if(levelToDisplay === "species"){
        nextLevelPath = {
            pathname: `/databasePages/speciesResults/${element[levelToDisplay]}`,
            query: {
                "species": JSON.stringify(element[levelToDisplay]),
            }
        }
    }
    else{
            nextLevelPath = {
            pathname: `/databasePages/taxonomyResults/${element[levelToDisplay]}`,
            query: {
                "search": element[levelToDisplay],
                "taxonomyLevel": levelToDisplay,
                "filters": filtersJSON,
                "search": searchJSON,
            }
        }
    }
    
    return(
        <div>
            <Link href={nextLevelPath}>
                <li>{element[levelToDisplay]}</li>
            </Link>
        </div>
    );
}

