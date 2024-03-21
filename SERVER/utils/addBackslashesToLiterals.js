function addBackslashesToLiterals(inputString) {
  return inputString.replace(/`/g, '\\`').replace(/\\(\$\{|\})/g, '\\$1');
}

export default addBackslashesToLiterals;