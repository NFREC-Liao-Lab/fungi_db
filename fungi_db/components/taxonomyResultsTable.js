import Link from "next/link";
import { getNextLevel } from "../pages/databasePages/taxonomyResults/[taxonomySearchResult]";


//http://localhost:3000/databasePages/taxonomyResults/Ascobolaceae?search=Ascobolaceae&taxonomyLevel=genus
//http://localhost:3000/databasePages/taxonomyResults/Pezizales?search=Pezizales&taxonomyLevel=order

export default function TaxonomyResultsTable(props){
    const element = props.data;
    const levelToDisplay = props.levelToDisplay;
    let nextLevel = getNextLevel(levelToDisplay);
    let nextLevelPath;
    let filters = props.filters
    if(nextLevel === "species"){

    }
    else{
            nextLevelPath = {
            pathname: `/databasePages/taxonomyResults/${element[levelToDisplay]}`,
            query: {
                "search": element[levelToDisplay],
                "taxonomyLevel": levelToDisplay,
                "filters": filters,
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

