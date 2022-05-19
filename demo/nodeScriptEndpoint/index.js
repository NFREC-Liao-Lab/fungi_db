
const express = require('express');
const shelljs = require('shelljs');
const bodyParser = require('body-parser');
const router = express.Router();

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use(express.json());


// server.get('/', (req, res) => {
//     const output = shelljs.exec('./testScript.sh test');
//     console.log("res is: " + res);
//     res.send(output)
// });
router.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
    // res.json(req.body);
});
server.use("/", router);
server.listen(4000, () => {
    console.log("Server is listening on port 4000...")
});

