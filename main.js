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
