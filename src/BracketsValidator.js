function bracketsValidator(string) {
  if (string === "" || 
      string[0] === "(" && string[1] === ")" ||
      string[0] === "[" && string[1] === "]") {
    return true
  } else {
    return false
  }
}
module.exports = bracketsValidator;