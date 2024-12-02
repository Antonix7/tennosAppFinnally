import express, { json } from 'express';
import { sequelize } from './database.js' ;
import productsRoutes from './routes/products.routes.js'
import morgan from 'morgan'

const app = express()
const port = 5000;

app.use(json());
app.use(morgan('dev'));
app.use(productsRoutes);

const server = async function() {
    try {
    await sequelize.sync();
    app.listen(
        `Server listening in http://localhost:${port}`
    );
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }}

server()