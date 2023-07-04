// cw1
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  console.log(parseInt(String(n).split("").sort().reverse().join("")));
}

descendingOrder(78965789654712);
//parseInt metjod would parse a value as a string and returns the first integer. If the first character cannot be converted, NaN is returned.Leading and trailing spaces are ignored.Only the first integer found is returned.

//so the above code will  parse the string and will return a numberstring(n) would convert it to string then split will split each number and the it will be sorted then reversed because we need it to be in decending order and the join it.

//cw2
//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((letter) => {
    return vowels.includes(letter) ? true : false;
  }).length;
}

// // now see the first and last element of return
// //it will return str's length  butbefor that str would be splited in letters and then will be filtered, if the letter is a,e,i,o or u which can be checked by vowels.includes and if true it will count how many are true and return its length....
