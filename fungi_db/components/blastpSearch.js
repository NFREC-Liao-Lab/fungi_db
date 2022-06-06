import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Searching from './searching';
const defaultQuery = "MKNGTIRFVKHTKDALCYSWINLLLVFVPIGIASHLAHLGPEIVFAMNAVAIIPLAGLLSHATEAVAARLGDTLGALLNVSFGNAVELILFIILLAGDQIRVVQAALLGSILANLLLILGMAFLLGGLRFQEQVYNSTVTQMSACMLSLAVMSLLLPTAFHSAFSNYDTADRETLYVSRGTSVVLLLVYILYLLFQLKSHSYMYASTPQHIIDEESHPGHVMSRTAAVVMLMISTALVAVCADFMSDAIEPMVEKTNVSAAFIGLIILPIVGNAAEHVTAVTVAAKNKMDLAIGVAVGSSIQIAIFITPFIVILGWIMNKEMSLYFNIFETVALFVTAFVVNFLVLDGRSNYLEGSLLIAAYVIIALSSFFYPDGCDASPIGGQEGTC";

export default function BlastpSearch() {
    const [searchStatus, setSearchStatus] = useState(false);
    const router = useRouter();
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()    

        setSearchStatus(true);

        // Get data from the form.
        const data = {
          query: event.target.query.value,
        }
    
        const JSONdata = JSON.stringify(data)    
        const endpoint = '/api/postRequest'    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
    
        const response = await fetch(endpoint, options)
        const result = await response.json()

        router.push({
          pathname: "/blastp/blastpResults",
          query: data,
        });
      }

    return(
        <div>
            {!searchStatus && <form className={styles.searchForm} onSubmit={handleSubmit}>
                <h4 id={styles.searchFieldHeader}>Enter your FASTA sequence below:</h4>
                <textarea name="query"  id="blastpQuery" placeholder="Enter FASTA sequence..." className={styles.formInput}> </textarea>
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>}
            {searchStatus && <Searching/>}
        </div>
    );
}
