
const defaultRoute = "http://localhost:8080/";

export default async function PostRequest(){
    const theBody = {
        "user": "simoncole",
        "password": "password1"
    };
    console.log("made it here");
    const res = await fetch(defaultRoute, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "body": JSON.stringify(theBody),
    });
    console.log("This was called");
    if (!res){
        return {
            notfound: true,
        }
    }
    return {
        props: res,
    }

}