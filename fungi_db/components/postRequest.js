
const defaultRoute = "http://localhost:8080/";
const defaultQuery = "FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF"

export default async function PostRequest(){
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