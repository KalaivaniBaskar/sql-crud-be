import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config()
export const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

