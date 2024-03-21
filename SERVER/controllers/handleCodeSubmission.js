import axios from "axios";
import removeComments from "../utils/removeComments.js";
import {
  PORT,
  X_RapidAPI_Key,
  X_RapidAPI_Host,
} from "../constants/constants.js";
import { submitCodeToJudge0 } from "../services/submitCodeToJudge0.js";
import { getSubmissionOutput } from "../services/getSubmissionOutput.js";
import { getStdoutUsingToken } from "../services/getStdoutUsingToken.js";
import getCodeLanguageId from "../controllers/getCodeLanguageId.js";
import { insertCodeSubmission } from "./insertCodeSubmission.js";

export async function handleCodeSubmission(req, res) {
  const { username, codeLanguage, stdin, sourceCode } = req.body;
  const languageId = await getCodeLanguageId(codeLanguage);

  try {
    // Remove comments from source code
    const codeWithoutComments = removeComments(sourceCode);
    // Submit code to Judge0

    const submissionResponse = await submitCodeToJudge0(
      codeWithoutComments,
      languageId,
      stdin
    );
    // Extract submission token from response
    const submissionToken = submissionResponse.data.token;
    console.log("1.Judge0output-submissiontoken", submissionToken);
    // Wait for submission result
    let submissionResult;
    let stdout;
    let message;
    do {
      submissionResult = await getSubmissionOutput(submissionToken);
    } while (submissionResult.status.id < 3); // Keep polling until submission is accepted or rejected

    const submissionOutputToken = submissionResult.token;
    console.log("2.Submission Output token", submissionOutputToken);

    if (submissionResult.status.id > 3) {
      const submission = await getStdoutUsingToken(submissionOutputToken);
      stdout ='Not available(View Message)';
      message =
       submission.status.description+
      "\n"+ submission.message +
        "\nStderr : " + submission.stderr + "\nCompile Output : " + submission.compile_output ;
        
      } else {
      try {
        message = "Accepted";
        stdout = await getStdoutUsingToken(submissionOutputToken);
      } catch (error) {
        stdout = "Compilation error";
      }
    }
    try {
      await insertCodeSubmission(
        username,
        codeLanguage,
        stdin,
        sourceCode,
        languageId,
        stdout,
        message
      );
      console.log("Code submission inserted successfully");
      res.redirect("/submission");
    } catch (error) {
      console.error("Error inserting code submission:", error);
      // Handle error appropriately, maybe send an error response
      res.status(500).send("Internal Server Error");
    }
    return;
  } catch (error) {
    console.error("Error handling code submission:", error);
    throw error;
  }
}
