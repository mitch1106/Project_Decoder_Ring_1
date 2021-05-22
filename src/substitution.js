// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

 function substitution(input, alphabet, encode = true) {
    // your solution code here
    const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(alphabet === undefined) {
      return false
    };
    // this sets a variable for alphabet and splits it into an array
    const alpha = alphabet.split("");
    if(alpha.length !== 26){
      return false
    };
    //checks for duplicate characters
    if(new Set(alpha).size !== alpha.length) {
      return false
    };
    //input converted to lowercase and placed in an array
    const messages = input.toLowerCase().split("");

    const alphaKey = {};
    let result = "";
      // encoding
    if(encode) {
      trueAlphabet.forEach((letter, index) => {
        //creates new keys and values for the alphaKey object
        alphaKey[letter] = alpha[index];
      })
      messages.forEach((message) => {
        //encodes input using alphaKey object and returns value and space
        result += message === " " ? " " : alphaKey[message]
      })
    }
     //decoding
    if(!encode) {
      trueAlphabet.forEach((letter, index) => {
        //creates new keys and values for alphaKey object
        alphaKey[alpha[index]] = letter
      });
      messages.forEach((message) => {
        //decodes input using alphaKey and returns value and space
        result += message === " " ? " " : alphaKey[message]
      })
    }
      return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
