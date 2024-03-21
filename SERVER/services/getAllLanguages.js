import axios from 'axios';
import {PORT, X_RapidAPI_Key, X_RapidAPI_Host} from '../constants/constants.js'

async function getAllLanguages() {
  const baseURL = 'https://judge0-ce.p.rapidapi.com/'; // Define the base URL
  const endpoint = 'languages'; // Define the endpoint
  const url = baseURL + endpoint; // Concatenate the base URL and endpoint

  try {
      const response = await axios.get(url, {
          headers: {
            'X-RapidAPI-Key': X_RapidAPI_Key,
            'X-RapidAPI-Host': X_RapidAPI_Host
          }
      });

      return response.data;
  } catch (error) {
      console.error("Error in get all languages:", error);
      throw error;
  }
}

export { getAllLanguages };
