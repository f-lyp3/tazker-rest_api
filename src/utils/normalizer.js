function capitalizeWord(word){
    // Make the first letter of string uppercase
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

// Capitalize every word from text
function capitalizeText(text){
    let arrayOfWords = text.split(" ");

    return arrayOfWords.map(word => capitalizeWord(word)).join(" ");
}

// Return a new obj without sensitive properties
function filterSensitiveProps(sensitiveProps, obj){
    if(!obj) return obj;
    const newObj = {};

    for(let property of Object.keys(obj)){
        // if the current seeing property is not sensitive
        if(!sensitiveProps.includes(property)){
            // Add it into the new obj
            newObj[property] = obj[property];
        }
    }

   return newObj
}

module.exports = Object.freeze({
    capitalizeWord,
    capitalizeText,
    filterSensitiveProps
});