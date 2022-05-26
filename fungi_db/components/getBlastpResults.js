export default async function GetBlastpResults(){
    const res = await fetch("/api/getRequest");
    const stringRes = JSON.stringify(res);
    console.log("ResJson.firstScore from getBlastpResults is: " + res);
    return(
        <p>{res}</p>
    ); 

    
}