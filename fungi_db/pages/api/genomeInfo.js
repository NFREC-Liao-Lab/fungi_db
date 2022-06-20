import { numberOfResults } from "..";
import { sql_query } from "../../lib/db";

//Species, primary_lifestyle
export default async function handler(req, res) {
    try{
        const genomeIds = req.body.genomeIds;
        const numberOfSequences = req.body.numberOfSequences;
        let results2d = [];
        for(let i = 0; i < numberOfSequences; i++){
            let results = [];
            for(let j = 0; j < numberOfResults; j++) {
                    results[j] = await sql_query(`
                    SELECT Species, primary_lifestyle 
                    FROM genomesInfo
                    WHERE Genome_id='${genomeIds[i][j]}'
                `);
            }
            results2d.push(results);
        }
        res.status(200).json(results2d);
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
}