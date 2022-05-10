// Shifting the alphabet will provide a Caesar key.

// abcdefghijklmnopqrstuvwxyz Original
// ijklmnopqrstuvwxyzabcdefgh Shifted

// Take original string => caesariphy it based off of given shift
// shift 1: bcdefghijklmnopqrstuvwxyza

// Potential bugs: account for punctuation, numbers, and spaces.

function caesarCipher (str, shift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let cipher = shifter(shift);
    let encryptedMessage = str.split('');

    encryptedMessage.forEach((char, i)  => {
        if (char != ' ') {
            encryptedMessage[i] = cipher[alphabet.indexOf(char)]
        }       
    });

    return encryptedMessage.join('')
    
    // Returns key array dependent on inputted shift.
    function shifter (n) {
        let caesarAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        
        for (let i = 0; i <= alphabet.length - 1; i++) {
            let shiftedIndex = i + n;
            if (shiftedIndex < 0) {
                shiftedIndex += 26;
            } else if (shiftedIndex == 25) {
                shiftedIndex -= 26;
            }
            caesarAlphabet[shiftedIndex] = alphabet[i];
        }
        return caesarAlphabet;
    }
}



module.exports = caesarCipher;

