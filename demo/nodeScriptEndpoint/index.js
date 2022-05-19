
const express = require('express');
const shelljs = require('shelljs');
const bodyParser = require('body-parser');
// const router = require('router');

const server = express();

// server.use(bodyParser.urlencoded({extended: true}));
// server.use(bodyParser.json());

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

server.get('/', (req, res) => {
    const output = shelljs.exec('./testScript.sh test');
    console.log("res is: " + res);
    res.send(output)
});
server.put('/', (req, res) => {
    res.send(console.log("There wasa a put request"))
});
server.post("/", (req, res) => {
    const data = String(req.body.data)
    res.json(data);
    res.header('Access-Control-Allow-Origin', "*")
});
server.listen(4000, () => {
    console.log("Server is listening on port 4000...")
});

