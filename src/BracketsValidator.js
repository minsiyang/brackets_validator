function bracketsValidator(string) {
  const data = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  if (string === "" || string.length === 2 &&
      string[1] === data[string[0]]) {
      // string[0] === "(" && string[1] === ")" ||
      // string[0] === "[" && string[1] === "]" ||
      // string[0] === "{" && string[1] === "}" ) {
    return true
  } else {
    return false
  }
}
module.exports = bracketsValidator;