import { useRouter } from 'next/router'
const defaultQuery = "FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF";

export default function BlastpSearch() {
    const router = useRouter();
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()    
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
        <form onSubmit={handleSubmit}>
            <input type="text" id="searchBox" name="query" placeholder="Enter FASTA sequence..."/>
            <button type="submit">Submit</button>
        </form>
    );
}