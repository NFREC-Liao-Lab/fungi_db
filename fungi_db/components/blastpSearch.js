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
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/postRequest'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
    
        const response = await fetch(endpoint, options)
    
        const result = await response.json()
        alert(`The query was: ${result.data}`)
        // const getResponse = await getRequest();
        // console.log("getResponse is ", getResponse.firstScore);
        router.push("/blastp/blastpResults");
      }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="searchBox" name="query" placeholder="Enter FASTA sequence..."/>
            <button type="submit">Submit</button>
        </form>
    );
}



