// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    
    const encodeAlphabet = {a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55"}
    
    const decodeAlphabet = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z", 00: " "}
    
    
    let result = "";
    if (encode) {
      //places each element of input into an array and converts letters to lowercase
      input = input.toLowerCase().split("");
      input.forEach((letter) => {
        //each letter of input is added to the result, and spaces will be added to result
        result += letter === " " ? " " : encodeAlphabet[letter];
      })  
    }
    
    //if encode = false, the following will decode the message
    if (!encode) {
      //replaces all spaces in encode with "00" 
      input = input.replace(" ", "00");
      if (input.length % 2 !== 0){
        //will return false if the input is an odd number
        return false};
      for (let i = 0; i < input.length; i += 2){
        //combines every two elements of the input array 
        const combined = `${input[i]}${input[i + 1]}`;
        //converts the combied variable string into an integer
        const pair = parseInt(combined);
        result += decodeAlphabet[pair];
      }
    }
  return result ;  
 }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };