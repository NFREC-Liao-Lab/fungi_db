const shelljs = require("shelljs");
export default function handler(req, res){
    const body = req.body;
    let query = req.body.query;
    console.log("body is: ", body);

    //make sure there is a query
    if(!body.query){
        return res.status(400).json({data: "query not found"});
    }
    shelljs.exec(`/Users/simoncole/fungiDB/db/blastnAllDbs.sh ${query}`);
    res.status(200).json({data: `The query recieved was: ${body.query}`});
}