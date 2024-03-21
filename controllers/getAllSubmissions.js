import connectToDatabase from '../database/connectToDatabase.js'; // 
const db = connectToDatabase();


async function getAllSubmissions() {
  try {
    const result = await db.query('SELECT * FROM code_submissions');
    return result.rows; // Return array of submissions
  } catch (error) {
    throw error;
  } finally {
    console.log("getAllSubmissions executed");
  }
}

export { getAllSubmissions };
