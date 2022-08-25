import { Sequelize } from "sequelize";

/**create dulu database di mysql client 
 * dan
 * samakan configurasinya dengan akun mysql masing-masing
**/

const database = new Sequelize('mern_db','root','', {
    host: "localhost",
    dialect: "mysql"
});

export default database;