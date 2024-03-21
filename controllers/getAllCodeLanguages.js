import connectToDatabase from '../database/connectToDatabase.js'; // 
const db = connectToDatabase();

export async function getAllCodeLanguages() {
  try {
    const allCodeLanguages = await db.query('SELECT * FROM codelanguages');
    return allCodeLanguages;
  } catch (error) {
    console.error("Error fetching code languages:", error);
    throw error;
  }
}


