// para executar: node index.js

const express = require ('express'); // importa o express
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // porta de acesso para rodar o node

/*
Métodos HTTP:

    get: busca info
    post: cria uma info
    put: altera info
    delet: deleta a info

*/

/*
*Tipos de parâmetro:

    Querry Parms: parâmetros nomeados enviados na rota após "?" e separados por "&"
    Route Parms: parâmetros para identificar recursos
    Request Body: corpo da requisição utulizado pra criar ou alterar recursos

*/

/*
*    SQL: MySQL, SQLite, PostgreSQL, Oracle, Micrisoft SQL Server
*    NoSQL: MongoDB (não relacionais, dados livres)
*/

/*
*Instalação do banco de dados

    Drivers (pacote oficial): SELECT * FROM users
    Query builder: table('users').select('*'), 
                    para instalar npm install knex 
                    e npm instal sqlite3, 
                    executar npx knex init
*/




