const path = require('path');
const dotenvResult = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

if (dotenvResult.error) {
    console.error("Error loading .env file:", dotenvResult.error);
}
const { Sequelize } = require('sequelize');

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql', //majbethash men .env file hit kayferdou elik dialetc tsupplieha explicitement matjinhash men shy file
    }
);


module.exports = {sequelize}