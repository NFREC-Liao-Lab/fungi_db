import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../../styles/Home.module.css"

export default function directSearch(){
    const [taxonomyLevelState, setTaxonomyLevelState] = useState({"value": "binomialNomenclature"});
    const router = useRouter();
    //get search input
    //redirect to dynamically routed page
    //Query sql genome db and look for that species in getServerSideProps calling node endpoint
    const handleSearch = (event) => {
        event.preventDefault();
        const search = JSON.stringify([event.target[0].value]);
        const filters = JSON.stringify([]);
        console.log("before", typeof(filters));
        if(taxonomyLevelState !== "binomialNomenclature"){
            router.push({
                pathname: `/databasePages/taxonomyResults/${search}`,
                query: {
                    "search": search,
                    "taxonomyLevel": taxonomyLevelState,
                    "filters": filters,
                }
            })
        }
        else{
            router.push({
                pathname:  `/databasePages/speciesResults/${search}`,
                query: {
                    "species": search,
                }
            })
        }
        
    }
    return(
        <div>
            <h1 className={styles.title}>Search Our Fungal Database by Taxonomy</h1>
            <div className={styles.searchField}>
                <select className={styles.button}
                    value={taxonomyLevelState}
                    onChange={(event) => {
                        setTaxonomyLevelState(event.target.value);
                }}>
                    <option value="">Choose a Taxonomy Level to Search By</option>
                    <option value="binomialNomenclature">Binomial Nomenclature</option>
                    <option value="phylum">Phylum</option>
                    <option value="class">Class</option>
                    <option value="order">Order</option>
                    <option value="family">Family</option>
                    <option value="genus">Genus</option>
                </select>
                <form className={styles.directSearchSearchWrapper} onSubmit={handleSearch}>
                    <input className={styles.directSearchSearchField} placeholder="Search Here..." type="text" name="directSearchInput"></input>
                    <input className={styles.button} type="submit" value="Search"></input>
                </form>
            </div>
        </div>
    );
}