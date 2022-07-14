import Link from "next/link";



export default function TaxonomyResultsTable(props){
    //get levelToDisplay
    let levelToDisplay;
    if(props.taxonomyLevel !== "species"){
        levelToDisplay = getNextLevel(props.taxonomyLevel);
    }

    const element = props.data;
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


    //if you're on genus level, make path to species page
    if(levelToDisplay === "species"){
        nextLevelPath = {
            pathname: `/databasePages/speciesResults/${element[levelToDisplay]}`,
            query: {
                "species": JSON.stringify([element[levelToDisplay]]),
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
            <button>
                <li>{element[levelToDisplay]}</li>
            </button>
        </div>
    );
}

