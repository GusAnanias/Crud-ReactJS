// Estamos importando o mysql
import mysql from "mysql"

// Estamos exportando uma variavel com o nome de db onde vai receber as informações de conexão do banco de dados
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_react"
});