const defaultEndpoint = "http://localhost:8080/";

export default async function GetRequest(){
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