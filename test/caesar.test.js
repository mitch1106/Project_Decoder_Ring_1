// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("Should return false if the shift value is not present", () => {
        const actual = caesar("hello");
        const expected = false;
        expect(false).to.be.false;
    })

    it("Should return false if the shift is equal to 0", () => {
        const actual = caesar("hello", 0)
        const expected = false;
        expect(false).to.be.false;
    })

    it("Should return false if the shift is less than -25", () => {
        const actual = caesar("hello", -26)
        const expected = false;
        expect(false).to.be.false;
    })

    it("Should return false if the shift is greater than 25", () => {
        const actual = caesar("hello", 26)
        const expected = false;
        expect(false).to.be.false;
    })

    it("should encode a message by shifting the letters", () => {
        const actual = caesar("hello", 1);
        const expected = "ifmmp";
        expect(actual).to.eql(expected);
    })
  
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const actual = caesar("ifmmp", 1, false);
        const expected = "hello";
        expect(actual).to.eql(expected)
    })
  
    it("should ignore capital letters", () => {
        const actual = caesar("IFMMP", 1, false);
        const expected = "hello";
        expect(actual).to.eql(expected)
    })
  
    it("should leave spaces and other symbols as is", () => {
       const actual = caesar("hello world!", 1)
       const expected = "ifmmp xpsme!"
       expect(actual).to.eql(expected)
    })
    
    it("should appropriately handle letters at the end of the alphabet", () => {
      const actual = caesar("zoo", 3);
      const expected = "crr"
      expect(actual).to.eql(expected);
    })
    
    it("should allow for a negative shift that will shift to the left", () => {
      const actual = caesar("apple", -3);
      const expected = "xmmib";
      expect(actual).to.eql(expected);
    })
  })