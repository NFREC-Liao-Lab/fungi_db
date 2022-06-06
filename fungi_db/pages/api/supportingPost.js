import * as d3 from "d3"

export default function handler(req, res) {
    const body = req.body;
    console.log(body);
    d3.tsv("/Users/simoncole/FungiDB/database-generation/FunDB_prot_seqID.tsv", (data) => {
        console.log(data);
        res.status(200).json({data});
    });
}