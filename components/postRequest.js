const defaultRoute = "http://localhost:4000/";

export default function PostRequest(){
    const body = JSON({"data": "This is the body data here"});
    const res = await fetch(defaultRoute, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "body": body,
    });

}