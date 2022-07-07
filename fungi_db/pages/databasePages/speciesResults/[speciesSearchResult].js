export default function speciesSearchResult(props){
    return(
        <h1>

            {props.species}
        </h1>
    );
}

export async function getServerSideProps(context){
    console.log("query: ", typeof(context.query.species));
    const species = JSON.parse(context.query.species);

    return{
        props: {
            "species": species,
        }
    }
}