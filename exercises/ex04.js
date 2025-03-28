function checkIfTheFirstLetterIsUppercase(word) {
    const  firstLetterCode = word.charCodeAt(0)
    return firstLetterCode >= 65 && firstLetterCode <= 90
}

module.exports = checkIfTheFirstLetterIsUppercase;