import axios from 'axios';
import {X_RapidAPI_Key, X_RapidAPI_Host} from '../constants/constants.js'



async function fetchData(url) {
  const options = {
      method: 'GET',
      url: url,
      headers: {
          'X-RapidAPI-Key': X_RapidAPI_Key,
          'X-RapidAPI-Host': X_RapidAPI_Host
      }
  };

  try {
      const response = await axios.request(options);
      return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}

export { fetchData };
