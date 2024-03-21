import axios from 'axios';
import removeComments from '../utils/removeComments.js';
import {PORT, X_RapidAPI_Key, X_RapidAPI_Host} from '../constants/constants.js'


//THIS OUTPUT SUBMISION TOKEN OF YOUR CODE
async function submitCodeToJudge0(sourceCode, languageId, input) {

  const apiUrl = 'https://judge0-ce.p.rapidapi.com/submissions';
  const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host
  };

  // Prepare request body
  const requestBody = {
      source_code: sourceCode,
      language_id: languageId,
      stdin: input || '' // Optional input data
  };

  
  try {
      const response = await axios.post(apiUrl, requestBody, { headers });
      return response;
  } catch (error) {
      console.error('Error submitting code to Judge0:', error.response.data);
      throw error;
  }
}

export { submitCodeToJudge0 };
