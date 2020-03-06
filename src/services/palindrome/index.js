function isPalindrome(word) {
  const reverseWord = word
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  const result = reverseWord === word.toLowerCase();
  return result;
}

module.exports = isPalindrome;
