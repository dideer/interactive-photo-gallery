
function transformString(str) {
  // Calculate the length of the input string
  const length = str.length;
  let result = '';

  // Check if the length is divisible by 15 (both 3 and 5)
  if (length % 15 === 0) {
    // If divisible by 15, reverse the string and replace each character with its ASCII code
    result = reverseAndReplaceWithASCII(str);
  }
  // Check if the length is divisible by 3
  else if (length % 3 === 0) {
    // If divisible by 3, reverse the string
    result = reverseString(str);
  }
  // Check if the length is divisible by 5
  else if (length % 5 === 0) {
    // If divisible by 5, replace each character with its ASCII code
    result = replaceWithASCII(str);
  }
  // If the length is not divisible by 3, 5, or 15
  else {
    // Return the original string
    result = str;
  }

  return result;
}


function reverseString(str) {
  // Split the string into an array of characters
  // Reverse the array
  // Join the characters back into a string
  return str.split('').reverse().join('');
}


function replaceWithASCII(str) {
  // Split the string into an array of characters
  // Map each character to its ASCII code
  // Join the ASCII codes with a space in between
  return str.split('').map(char => char.charCodeAt(0)).join(' ');
}


function reverseAndReplaceWithASCII(str) {
  // Split the string into an array of characters
  // Reverse the array
  // Map each character to its ASCII code
  // Join the ASCII codes with a space in between
  return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
}