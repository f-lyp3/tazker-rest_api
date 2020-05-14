function mustHaveError(thing, missing){
    // When creating $thing, $missing must be supplied!
    return new Error(`${thing} must have ${missing}!`);
}

function notFound(thing){
    return new Error(`${thing} not found!`);
}

module.exports = Object.freeze({
    mustHaveError,
    notFound
});