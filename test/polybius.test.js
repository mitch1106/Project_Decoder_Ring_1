// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const actual = polybius("hello");
    const expected = "3251131343";
    expect(actual).to.eql(expected)
  })
  
  it("should translate the letters i and j to 42 when encoding", () => {
    const actual = polybius("hijack");
    const expected = "324242113152";
    expect(actual).to.eql(expected);
  })
  
  it("should leave spaces as-is when encoding", () => {
    const actual = polybius("hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  })
  
  it("should leave spaces as-is when decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.eql(expected);
  })
  
  it("ignores capital letters", () => {
    const actual = polybius("HELLO");
    const expected = "3251131343";
    expect(actual).to.eql(expected);
   })
  
  it("translates 42 to (i/j) when decoding", () => {
    const actual = polybius("324242113152", false);
    const expected = "hi/ji/jack";
    expect(actual).to.eql(expected);
  })
  
  it("should return false if the number of characters in the string is an odd number", () => {
    const actual = polybius("32424211315", false);
    const expected = false;
    expect(false).to.be.false;
  })
})