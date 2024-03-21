import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT; 
const X_RapidAPI_Key = process.env.X_RapidAPI_Key; 
const X_RapidAPI_Host = process.env.X_RapidAPI_Host;
const password  = process.env.password;

export {
    PORT,
    X_RapidAPI_Host,
    X_RapidAPI_Key,
    password
}