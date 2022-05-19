const defaultEndpoint = "http://localhost:4000/";

export default async function GetRequest(){
    const res = await fetch(defaultEndpoint)
    const resJson = await res.json();

    if (!resJson) {
        return {
            notFound: true
        }
    }

    return {
        props: { resJson }
    }
}