import { fetchData } from './fetchData.js'; // Assuming you have a fetchData function

async function getAbout() {
  const baseURL = 'https://judge0-ce.p.rapidapi.com/'; // Define the base URL
  const endpoint = 'about'; // Define the endpoint
  const url = baseURL + endpoint; // Concatenate the base URL and endpoint
 
  try {
      const data = await fetchData(url);
  } catch (error) {
      // Handle error if needed
      console.error('Error getting about data:', error);
  }
}

export { getAbout };
