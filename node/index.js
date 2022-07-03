const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Vinicius')`;
const queryPeoples = `SELECT * FROM people`;
let peoples;
connection.query(sql);
connection.query(queryPeoples, function (err, result) {
    peoples = result;
});

app.get('/', (req, res) => {
    connection.query(sql);
    connection.query(queryPeoples, function (err, result) {
        peoples = result;
    });
    res.send(`<h1>Full Cycle Rockski!</h1> \n ${peoples?.map(people => people.name)}`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})