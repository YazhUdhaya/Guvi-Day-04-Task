//1.Declare four variables without assigning values and print them in console

let a;
var b;
let c;
//const d;
let e = [];
const f = {};
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//2.How to get value of the variable myvar as output
//var myvar= 1;
//console.log("myvar");

var myvar = 1;
console.log("myvar");

var myvar = 1;
console.log(myvar);

//3.Declare variables to store your first name, last name, 
//marital status, country and age in multiple lines

let firstName = "Vijaya";
let lastName = "Kumar";
let maritialStatus = "Married";
let country = "India";
let age = 54;

//4.Declare variables to store your first name, 
//last name, marital status, country and age in a single line

let personDetails = {firstname:"Vijaya",
lastName:"Kumar",
maritialStatus:"Married",
country:"India",
age:54 }

//5.Declare variables and assign string, boolean, undefined and null data types

let stringDataTypes = "I am 25 years old"; //String DataType
let stringDataTypes1 = "You are 30 years old"; // String DataType
let booleanDataType = true; //Boolean DataType
let booleanDataType1 = false; //Boolean DataType
let dataTypeUndefined = undefined;// Declare But Not Assign value
let dataTypeNull = null;// Empty
if(typeof stringDataTypes === 'string'){
   console.log(booleanDataType)
} 
if (typeof dataTypeUndefined !=='string'){
   console.log(booleanDataType1);
}
  

//6.Convert the string to integer

//parseInt()
//Number()
//Plus sign(+)

let number = 10.9;
let int = parseInt(number);
let num = Number(number);
let plus = +(number);
console.log(int);
console.log(num);
console.log(plus);

//7.Write 6 statement which provide truthy & falsey values

// //Truthy Value :

// 1.Truthy expressions evaluate to boolean true value 
//     testTruthyFalsy (true);  //Prints 'truthy'
// 2.A string containing a single zero is evaluated to true
//     let zero = '0';// Prints 'truthy'
// 3.A string containing the text “false” is evaluated to true
//     let falseVal = 'false'// Prints 'truthy'
// 4.An empty array is evaluated to true
//     let arrVal = []; //Prints 'truthy'
// 5.An empty object is evaluated to true
//     let objectVal = {}; //Prints 'truthy'
// 6.An “empty” function is evaluated to true
//     let emptyFn = function(){}; //Prints 'truthy'
    
// //Falsy Value :

// 1.Falsy expressions evaluate to boolean false value
//     testTruthyFalsy (false);  //Prints 'falsy'
// 2.Empty string = ''===>Any empty string is evaluated to false
//     testTruthyFalsy (''); //Prints 'falsy'
// 3.Undefined ===>Any undefined variable is equal to false
//     var my_var = undefined;
//     testTruthyFalsy (my_var); //Prints 'falsy'
// 4.null ===>Any null variable is equal to false
//     var my_var = null;
//     testTruthyFalsy (my_var); //Prints 'falsy'
// 5.NaN ===>Any numerical expression with result in NaN (not a number) is equal to false
//     testTruthyFalsy (NaN);    //Prints 'falsy'
// 6.Number zero = +0 or -0 ===>Any numerical expression with result in zero is equal to false
//     testTruthyFalsy ( 2 - 2 );    //Prints 'falsy'
//     testTruthyFalsy ( 0 );  //Prints 'falsy'