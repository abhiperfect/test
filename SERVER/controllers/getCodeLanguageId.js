import connectToDatabase from "../database/connectToDatabase.js"; //
const db = connectToDatabase();

async function getCodeLanguageId(codeLanguageName) {

  try {
    const query = `
      SELECT language_id
      FROM codelanguages
      WHERE language_name = $1
    `;
    const result = await db.query(query, [codeLanguageName]);
    if (result.rows) {
      return result.rows[0].language_id;
    } else {
      throw new Error(`Code language '${codeLanguageName}' not found.`);
    }
  } catch (error) {
    console.error("Error retrieving code language ID:", error);
    throw error;
  }
}

export default getCodeLanguageId;
