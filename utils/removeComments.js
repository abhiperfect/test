function removeComments(sourceCode) {
  // Regular expression to match single-line comments
  const singleLineCommentRegex = /\/\/.*$/gm;

  // Regular expression to match multi-line comments
  const multiLineCommentRegex = /\/\*[\s\S]*?\*\//gm;

  // Remove single-line comments
  let codeWithoutSingleLineComments = sourceCode.replace(singleLineCommentRegex, '');

  // Remove multi-line comments
  let codeWithoutComments = codeWithoutSingleLineComments.replace(multiLineCommentRegex, '');

  return codeWithoutComments.trim(); // Trim any leading or trailing whitespace
}

export default removeComments;

