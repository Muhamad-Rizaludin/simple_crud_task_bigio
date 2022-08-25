import { Sequelize } from "sequelize";
import database from "../config/database.js";

const {DataTypes} = Sequelize;

const Product = database.define('products',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});

export default Product;

// pakai ini jika belum terdapat table di database jadi ketika program dijalankan otmotis di create

// (async()=>{
//     await database.sync();
// })()