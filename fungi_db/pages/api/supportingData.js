import { sql_query } from "../../lib/db";
export default async function handler(req, res) {
    try{
        // const body = JSON.parse(req.body);
        const seqIds = req.body.seqIds;
        const results = [];
        for(let i = 0; i < 10; i++){
            results[i] = await sql_query(
                `SELECT Transporter_id, Genome_id
                FROM proteinSeqID
                WHERE SeqID='${seqIds[i]}'
            `);
        }
        return res.status(200).json(results);
    }
    catch (e){
        res.status(500).json({message: e.message})
    }

}