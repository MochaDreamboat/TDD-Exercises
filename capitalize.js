function capitalize (str) {
    if (typeof str == 'string') {
    const lettersOnly = new RegExp('[A-Za-z]');
    let splitString = str.split('');
    let capitalizedIndex = splitString
                            .indexOf(splitString.find(char => lettersOnly.test(char)));  
                            
    splitString[capitalizedIndex] = splitString[capitalizedIndex].toUpperCase();
    return splitString.join('')
    } else {
        return 'Please input valid string.'
    }
};

function reverseString (str) {
    return str.slice(-1);
}


module.exports = capitalize;