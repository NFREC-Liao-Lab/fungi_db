import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Searching from './searching';
import pixelMushroom from "../public/pixelMushroom.png";
const defaultQuery = "FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF";

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

        router.push("/blastp/blastPResults");
      }

    return(
        <div>
            {!searchStatus && <form onSubmit={handleSubmit}>
                <input type="text" id="searchBox" name="query" placeholder="Enter FASTA sequence..."/>
                <button type="submit">Submit</button>
            </form>}
            {searchStatus && <h4>&#128640;BLASTing...</h4> && <br/> && <Image src={pixelMushroom} width={250} height={250} className={styles.pixelMushroom}/>}
        </div>
    );
}
