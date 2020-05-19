function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
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
    capitalizeWord,
    noSensitive
});