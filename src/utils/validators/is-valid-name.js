function isValidname(name){
    // Validate user's name
    const nameRegex = new RegExp(/^[a-zA-Z]+$/);
    return nameRegex.test(name);
}

module.exports = isValidname;