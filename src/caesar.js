// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      //early return of false for above conditions
      return false}; 
    
    //converts input to lowercase and places each element into array
    input = input.toLowerCase().split(""); 
    
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
    
    //where the encoded/decoded message will be placed
    let result = ""; 
    let updatedIndex = 0;
    
    //will allow for shift in opposite direction if message is being decoded
    if(!encode) {shift *= -1} 
    for (let i = 0; i < input.length; i++){
      if (alphabet.indexOf(input[i])=== -1) {
        //allows for characters not included in the alphabet array 
        result += input[i]} 
      else {
         //assigns value to updatedIndex by adding index of current character and shift
        updatedIndex = alphabet.indexOf(input[i]) + shift; 
        if (updatedIndex >= 26) {
            //will handle letters at end of alphabet
            updatedIndex -= 26
        } 
        else if (updatedIndex <= -1) {
          //will allow for negative shift to the left
          updatedIndex += 26
        }
          result += alphabet[updatedIndex] 
      }
    }
        return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
