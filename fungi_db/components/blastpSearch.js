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

        console.log("data is: ", data);

        //validate data
        const validatedData = validateData(data);
        console.log("validatedData is: ", validatedData);
    
        //converts data from form from Object to String
        const stringData = JSON.stringify(validatedData)    
        const endpoint = '/api/postRequest'    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: stringData,
        }
    
        const response = await fetch(endpoint, options)
        const result = await response.json()

        console.log("Result is: ", result);

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

export function validateData(data){
  let query = data.query;
  let headers = [];
  let sequences = [];
  let sequencesIndex = 0;
  let headersIndex = 0;
  let sequenceStart = 0;
  let sequenceEnd;
  let tempi, tempj;
  for(let i = 0; i < query.length; i++){
    if(query.charAt(i) === ">"){
      tempi = i;
      sequenceEnd = --tempi;
      if(sequenceEnd !== -1){
        sequences[sequencesIndex] = query.slice(sequenceStart, sequenceEnd);
        sequencesIndex++;
      }
      for(let j = i; j < query.length; j++){
        if(query.charAt(j) === "\n"){
          headers[headersIndex] = query.slice(i, j);
          headersIndex++;
          tempj = j;
          sequenceStart = ++tempj;
          break;
        }
      }
    }
  }
  //assign last sequence
  sequences[sequencesIndex] = query.slice(sequenceStart, query.length);
  const results = {
    "headers": headers,
    "sequences": sequences,
  }
  return results;
}
