//connection using sequelize
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'myproductsdb', 
    'magycorp_dev', 
    '@Magycorp2017', 
    {
    host: '192.168.100.12',
    dialect: 'mssql',
    dialectOptions: {
      options: {
          encrypt: false
      }
  }
    }
  )

export {sequelize}