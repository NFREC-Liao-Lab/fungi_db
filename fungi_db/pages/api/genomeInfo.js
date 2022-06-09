import { sql_query } from "../../lib/db";

//Species, primary_lifestyle
export default async function handler(req, res) {
    try{
        const genomeIds = req.body.genomeIds;
        let results = [];
        for(let i = 0; i < 10; i++) {
            results[i] = await sql_query(`
                SELECT Species, primary_lifestyle 
                FROM genomesInfo
                WHERE Genome_id='${genomeIds[i]}'
            `);
        }
        console.log("results are: ", results);
        res.status(200).json(results);
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
}