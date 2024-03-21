import { getAllCodeLanguages } from '../controllers/getAllCodeLanguages.js'; 
import axios from 'axios';

async function handleHomePageRequest(req, res) {
    try {
        const allCodeLanguages = (await getAllCodeLanguages()).rows;
        res.render("home.ejs", { allCodeLanguages });
    } catch (error) {
        console.error('Error handling home page request:', error);
        res.status(500).send('Internal Server Error');
    }
}

export { handleHomePageRequest };
