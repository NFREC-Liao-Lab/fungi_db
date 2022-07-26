import { filter } from "d3";

export default function genusSearchResults(props){
    const genus = props.genus;

    return(
        <div>
            <h1>{genus}</h1>
        </div>
    );
}

export async function getServerSideProps(context){
    const search = JSON.parse(context.query.search);
    const genus = search[search.length-1]


    return{
        props: {
            genus: genus,
        }
    }


}