import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css"

export default function directSearch(){
    const router = useRouter();
    //get search input
    //redirect to dynamically routed page
    //Query sql genome db and look for that species in getServerSideProps calling node endpoint
    const handleSearch = (event) => {
        event.preventDefault();
        const search = event.target[0].value;
        router.push({
            pathname: `/databasePages/directSearch/${search}`,
            query: {"search": search}
        })
        console.log("the data given here is: ", event.target.value);
    }
    return(
        <div>
            <h1 className={styles.title}>Search Our Fungal Database by Binomial Nomenclature</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="directSearchInput">Enter the Genus and Species below: </label>
                <input type="text" name="directSearchInput"></input>
                <input type="submit" value="Search"></input>
            </form>

        </div>
    );
}