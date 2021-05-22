// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe( "substitution", () => {
    it("should return false if the substitution alphabet is not 26 characters", () => {
        const actual = substitution("hello", "theq#ickbrwnf$xjmpsvlzydg", encode = true);
        const expected = false;
        expect(false).to.be.false;
    }) 

    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitution("hello")
        const expected = false; 
        expect(false).to.be.false;
    })

    it("should return false if any of the characters in the substitution alphabet occur more than once in the substitution alphabet", () => {
        const actual = substitution("hello", "abcdefghijklabcdefghijkl"); 
        const expected = false;
        expect(false).to.be.false;
    })

    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitution("hello", "thequickbrownfxjmpsvlazydg");
        const expected = "kuwwx";
        expect(actual).to.eql(expected);
    })

    it("should be able to encode a message with any kind of unique characters", () => {
        const actual = substitution("hello", "theq#ickbrwnf$xjmpsvlazydg");
        const expected = "k#nnx";
        expect(actual).to.eql(expected);
    })

    it("should preserve spaces when encoding a message", () => {
        const actual = substitution("hello world", "thequickbrownfxjmpsvlazydg");
        const expected = "kuwwx zxpwq";
        expect(actual).to.eql(expected);
    })

    it("should decode a message by using the given substitution alphabet", () =>  {
        const actual = substitution("kuwwx", "thequickbrownfxjmpsvlazydg", false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    })

    it("should be able to decode a message with any kind of key with unique characters", () => {
        const actual = substitution("k#nnx", "theq#ickbrwnf$xjmpsvlazydg", false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    })

    it("should preserve spaces when decoding a message", () => {
        const actual = substitution("kuwwx zxpwq", "thequickbrownfxjmpsvlazydg", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    })
})