import pg from "pg";
import { password } from "../constants/constants.js";
// Function to connect to the PostgreSQL database
// function connectToDatabase() {
//     const db = new pg.Client({
//         user: "postgres",
//         host: "localhost",
//         database: "tuf",
//         password: password,
//         port: 5432,
//     });

//     db.connect()
//         .then(() => {
//             console.log('Connected to the PostgreSQL database');
//         })
//         .catch((error) => {
//             console.error('Error connecting to the PostgreSQL database:', error);
//         });

//     return db;
// }

const { Pool } = pg;

function connectToDatabase() {
  const pool = new Pool({
    connectionString:
      "postgres://default:0tuwH9cDFRdQ@ep-still-sunset-a4icuau8-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  });

  pool
    .connect()
    .then(() => {
      console.log("Connected to the PostgreSQL database");
    })
    .catch((error) => {
      console.error("Error connecting to the PostgreSQL database:", error);
    });

  return pool;
}

export default connectToDatabase;
