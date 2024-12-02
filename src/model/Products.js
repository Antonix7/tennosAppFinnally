import {sequelize} from '../database.js';
import { DataTypes } from 'sequelize';

export const Products = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    creationDate: {
        type: DataTypes.STRING
    }
})
