import { getAllSubmissions } from "./getAllSubmissions.js";

async function fetchAllSubmissions() {
  try {
    const submissions = await getAllSubmissions();
    return submissions; // Store submissions in a constant
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return []; // Return empty array in case of error
  }
}

export { fetchAllSubmissions };
