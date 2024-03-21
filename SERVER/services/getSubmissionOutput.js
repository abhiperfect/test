import axios from 'axios';
import {X_RapidAPI_Key, X_RapidAPI_Host} from '../constants/constants.js'

async function getSubmissionOutput(submissionToken) {
  const apiUrl = `https://judge0-ce.p.rapidapi.com/submissions/${submissionToken}`;
  const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host
  };
  const params = {
    base64_encoded: true // Enable base64 encoding
  };

  try {
      const response = await axios.get(apiUrl, {params, headers });
      return response.data;
  } catch (error) {
      console.error('Error getting submission output from Judge0:', error.response.data);
      throw error;
  }
}

export { getSubmissionOutput };
