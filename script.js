/* Psudocode
create files and link JS to HTML
create a string for the saying and store in in a variable
create 3 varables and assign them a value using arithmatic expressions
concatenate the variables into one variable so its simpler to call
use alert function do display saying and secret code to the browser
if time allows try to pass the variables from JS to HTML and display using known tags
*/

//creates string variable and stores the saying
const str = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: ';
//unessesary but just for fun to manipulate the other variables
const number = 5
//creates 3 variables and stores the given code value using (+,-,*)
let num1 = 2*number;
let num2 = num1*number-10;
let num3 = num1+num2-11;
//CONCATENATE 3 variables into 1
secretCode = `${num1} ${num2} ${num3}`

//alert(str+secretCode);

/*using document.getElementById method to retrieve HTMLtag and change its innerHTML property to variable values in JS. */
document.getElementById("string").innerHTML=str;
document.getElementById("code").innerHTML=secretCode;

alert(str+secretCode);