const defaultEndpoint = "http://localhost:8080/";
const defaultQuery = "FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF";

export default function BlastpSearch() {
    function handleSubmit(event) {
        console.log("Submission is: " + event.target.username);
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" name="searchBox" placeholder="Enter FASTA sequence..."/>
            <input type="submit" value="BLAST Search" />

        </form>
    );
}

async function GetRequest(){
    const res = await fetch(defaultEndpoint)
    const resJson = await res.json();
    console.log("Res from getRequest is: " + resJson.firstScore);
    // if (!res) {
    //     return {
    //         notFound: true
    //     }
    // }

    // return {
    //     props: { resJson }
    // }
}

async function PostRequest(){
    const theBody = {
        "query": defaultQuery
    };
    console.log("made it here");
    const res = await fetch(defaultRoute, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "body": JSON.stringify(theBody),
    });
    console.log(res);
    if (!res){
        return {
            notfound: true,
        }
    }
    return {
        props: res,
    }

}