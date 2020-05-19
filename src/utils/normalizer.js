function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function capitalizeText(text){
    let arrayOfWords = text.split(" ");

    return arrayOfWords.map(word => capitalizeWord(word)).join(" ");
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
    noSensitive,
    capitalizeText
});