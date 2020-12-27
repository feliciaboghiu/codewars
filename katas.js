/* A trick I learned in elementary school to determine whether or not a number was divisible by three 
is to add all of the integers in the number together and to divide the resulting sum by three. 
If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
You can expect all test case arguments to be strings representing values greater than 0.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
*/

function divisibleByThree(str){
    let digits = str.split('');
     let sum = 0;
     // Compute the sum
     for (let digit of digits) {
       sum += Number(digit);
     }
     // Compute remainder
     let remainder = sum % 3;
     return (remainder === 0)
   }


function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
}   

function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
}

function divisibleByThree(str) {
    let s = 0;
    for (const c of str)
      s += parseInt(c);
    return s % 3 == 0;
}


/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/

function XO(str) {
  let strArr = str.toLowerCase().split('');
  let x = null;
  let o = null;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'x') {
      x++;
    } 
    if (strArr[i] === 'o') {
      o++;
    }
    }
      if (x === o) {
      return true;
    } else {
      return false;
  }
}