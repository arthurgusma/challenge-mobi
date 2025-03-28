function maskify(str) {
    if (str.length > 4) {
        let newStr = ""
        for (let i = 0; i < str.length - 4; i++) {
            newStr += "#"
        }
        return newStr + str.substring(str.length - 4)
    }
    return str
}

module.exports = maskify;