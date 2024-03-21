import connectToDatabase from '../database/connectToDatabase.js'; // 
const db = connectToDatabase();


async function insertCodeSubmission(username, codeLanguage, stdin, sourceCode, codeLanguageId, stdout,message) {
  try {
    await db.query("BEGIN");
    const queryText =
      "INSERT INTO code_submissions (username, code_language, stdin, source_code, stdout,code_id,message, submission_timestamp) VALUES ($1, $2, $3, $4, $5, $6,$7,NOW())";

    const values = [username, codeLanguage, stdin, sourceCode, stdout,codeLanguageId, message];
    await db.query(queryText, values);
    await db.query("COMMIT");
    console.log("Code submission completed");
  } catch (error) {
    await db.query("ROLLBACK");
    console.error("Error inserting code submission:", error);
    throw error;
  }
}

export { insertCodeSubmission };
