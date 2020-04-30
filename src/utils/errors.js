function mustHaveError(thing, missing){
    // When creating $thing, $missing must be supplied!
    return new Error(`${thing} must have ${missing}!`);
}

module.exports = Object.freeze({
    mustHaveError
});