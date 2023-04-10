const express = require('express') 
const app = express();

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'guiaperguntas'
});

connection.connect();
 
connection.query('SELECT * FROM perguntas', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  console.log('O titulo do primeiro registro é',results[0].titulo);
});

connection.query('SELECT titulo FROM perguntas', (error, results, fields)=>{
    if (error) throw error;
    console.log(results)
})

app.get('/:id', (req, res)=>{
    const id = req.params.id
    connection.query(`SELECT * FROM perguntas WHERE id =${id}`, (error, results, fields)=>{
        if (error) throw error;
        console.log(results)
    })
    
})

app.listen(8080, ()=>{
    console.log('app rodando')
})