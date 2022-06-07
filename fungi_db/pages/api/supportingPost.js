// import {parse} from "papaparse"
// export default async function handler(req, res) {
//     let theData;
//     let fetchResults = await fetch("/Users/simoncole/FungiDB/database-generation/FunDB_prot_seqID.csv")
//         .then(response => response.text())
//         .then(data => {
//             // Do something with your data
//             console.log("from .then: ", data);
//             theData = data;
//     });
//     let results = parse(theData, {download: true})
//     console.log(results);
//     const responseJson = {
//         "response": "check the console",
//     }
//     res.status(200).json(
//         responseJson
// )
// }