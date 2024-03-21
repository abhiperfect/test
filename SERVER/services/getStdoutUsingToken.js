import axios from 'axios';
import {X_RapidAPI_Key, X_RapidAPI_Host} from '../constants/constants.js'



async function getStdoutUsingToken(outputToken) {
  const apiUrl = `https://judge0-ce.p.rapidapi.com/submissions/${outputToken}`;
  const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host
  };

  try {
      const response = await axios.get(apiUrl, { headers });
      const submission = response.data;
      if (submission.status && submission.status.id !== 3) {
         return submission;
      }
      // Check if submission status is "Accepted"
      if (submission.status && submission.status.id === 3) {
          return submission.stdout; // Return stdout if submission is accepted
      } else {
          throw new Error('Submission is not accepted or still processing.');
      }
  } catch (error) {
      console.error('Error retrieving stdout from Judge0:', error.response.data);
      throw 'error';
  }
}

export { getStdoutUsingToken };
