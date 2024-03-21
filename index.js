import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import env from "dotenv";
import connectToDatabase from "./database/connectToDatabase.js";
import removeComments from "./utils/removeComments.js";
import { getStdoutUsingToken } from "./services/getStdoutUsingToken.js";
import { submitCodeToJudge0 } from "./services/submitCodeToJudge0.js";
import { getSubmissionOutput } from "./services/getSubmissionOutput.js";
import { fetchData } from "./services/fetchData.js";
import { getAllLanguages } from "./services/getAllLanguages.js";
import { getAbout } from "./services/getAbout.js";
import { insertCodeSubmission } from "./controllers/insertCodeSubmission.js";
import { getAllSubmissions } from "./controllers/getAllSubmissions.js";
import { fetchAllSubmissions } from "./controllers/fetchAllSubmissions.js";
import { displaySubmissions } from './controllers/displaySubmissions.js';
import { getAllCodeLanguages } from "./controllers/getAllCodeLanguages.js";
import {PORT, X_RapidAPI_Key, X_RapidAPI_Host} from './constants/constants.js'
import { handleCodeSubmission } from "./controllers/handleCodeSubmission.js";
import  {handleHomePageRequest}  from "./routes/handleHomePageRequest.js";
import { checkReferer } from './routes/checkReferer.js';
const app = express();
const port = 3000;



//FOR IMPORTING CLIENT DATA INTO SERVER
const __filename = fileURLToPath(import.meta.url); //GET THE CURRENT FILE PATH
const __dirname = dirname(__filename); //GET THE DIRECTORY PATH OF THE CURRENT FILE
app.set("views", path.join(__dirname, "CLIENT/views")); //SET VIEWS PATH
app.use(express.static("CLIENT/public"));
app.set("view engine", "ejs");


//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



//ROUTES
app.get("/", handleHomePageRequest);
app.post("/submit", handleCodeSubmission);
app.get("/submission",displaySubmissions);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
