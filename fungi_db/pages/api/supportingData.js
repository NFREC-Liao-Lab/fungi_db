import { sql_query } from "../../lib/db";
import { numberOfResults } from "./primaryData";
export default async function handler(req, res) {
    try{
        // const body = JSON.parse(req.body);
        const seqIds = req.body.seqIds;
        const numberOfSequences = req.body.numberOfSequences;
        const results = [];
        for(let j = 0; j < numberOfSequences; j++){
            let tempResults = [];
            for(let i = 0; i < numberOfResults; i++){
                tempResults[i] = await sql_query(
                    `SELECT Transporter_id, Genome_id
                    FROM proteinSeqID
                    WHERE SeqID='${seqIds[j][i]}'
                `);
            }
            results.push(tempResults);
        }
        return res.status(200).json(results);
    }
    catch (e){
        res.status(500).json({message: e.message})
    }

}