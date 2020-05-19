function capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
}

function noSensitive(obj, sensitives){
    const newObj = {};

    for(let property of Object.keys(obj)){
        if(!sensitives.includes(property)){
            newObj[property] = obj[property];
        }
    }

   return newObj
}

module.exports = Object.freeze({
    capitalize,
    noSensitive
});