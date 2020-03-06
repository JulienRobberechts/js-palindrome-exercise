const isPalindrome = require("./index");

const palindrome1 = "abba";
const palindrome2 = "aaa";
const palindrome3 = "Able was I ere I saw Elba";
const nonPalindrome1 = "abb";
const nonPalindrome2 = "aaba";

describe("isPalindrome should return the right value", () => {
  test("for palindrome 1", () => {
    expect(isPalindrome(palindrome1)).toBe(true);
  });

  test("for palindrome 2", () => {
    expect(isPalindrome(palindrome2)).toBe(true);
  });

  test("for palindrome 3", () => {
    expect(isPalindrome(palindrome3)).toBe(true);
  });

  test("for nonPalindrome 1", () => {
    expect(isPalindrome(nonPalindrome1)).toBe(false);
  });

  test("for nonPalindrome 2", () => {
    expect(isPalindrome(nonPalindrome2)).toBe(false);
  });
});
