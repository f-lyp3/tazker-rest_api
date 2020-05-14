function isFinePassoword(password){
    // Verifies user password strenght
    let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.=?!@#\$%\^&\*]*)(?=.{6,})")

    return passwordRegex.test(password)
}

module.exports = isFinePassoword;