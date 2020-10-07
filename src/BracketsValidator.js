function bracketsValidator(string) {
  const data = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  if (string === "" ) return true; 
  for (let i = 0; i < string.length; i += 2) {
    if (string[i+1] === data[string[i]]) {
        // string[0] === "(" && string[1] === ")" ||
        // string[0] === "[" && string[1] === "]" ||
        // string[0] === "{" && string[1] === "}" ) {
      return true
    } else {
      return false
    }
  }
}
module.exports = bracketsValidator;