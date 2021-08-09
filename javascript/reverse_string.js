function reverseString(str) {
  // type your code here
  let reversed = ''

  for(let char of str){
    reversed = char + reversed
  }
return reversed
}

function fibonachi(num){
  let n1 = 0;
  let n2 = 1;
  for (let i= 0; i < num;i++){
    let n3 = n2
    n2 = n1 + n2 
    n1 = n3
  }
  return n1
}
console.log(fibonachi(11))


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
