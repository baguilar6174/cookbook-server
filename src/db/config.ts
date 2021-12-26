import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASS;
const dbPort = +process.env.DB_PORT!;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    // logging: console.log,
    logging: false,
    port: dbPort,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
});

export default sequelizeConnection;