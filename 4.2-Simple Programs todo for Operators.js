//1.Square of a number

let number = 12;
let square = (number ** 2);

console.log("1.Square Value :" + " " + square);

//2.Swapping 2 numbers

let valueOne = 10;
let valueTwo = 20;
console.log("2.Before Swapping :" + " " + valueOne, valueTwo);
let temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;
console.log("2.After Swapping :" + " " + valueOne, valueTwo);

//3.Addition of 3 numbers

let firstValue = 20;
let secValue = 30;
let thirdValue = 50;
let addition = firstValue + secValue + thirdValue;

console.log("3.Addition Value :" + " " + addition);

//4.Celsius to Fahrenheit conversion

let celsius = (-40);
function fahrenheit(celsius) {
  let fahren = (celsius * (9 / 5)) + 32;
  return fahren;
}
console.log("4.Celsius to Fahrenheit" + " " + fahrenheit(celsius));

//5.Meter to miles

let meter = 10;
let mile;
function miles(meter) {
  mile = meter * (0.000621);
  return mile;
}
console.log("5.Meter to Miles :" + " " + miles(meter));

//6.Pounds to kg

let pound = 10;
let kgs;
function kg(pound) {
  kgs = pound * (0.45359237);
  return kgs;
}
console.log("6.Pounds to Kg :" + " " + kg(pound).toFixed(2));

//7. Calculate Batting Average

let totalNumberOfHits = 230;
let totalNumberOfBats = 1000;
let battingAverages;
function battingAverage(totalNumberOfHits, totalNumberOfBats) {
  battingAverages = totalNumberOfHits / totalNumberOfBats;
  return battingAverages;
}
console.log("7.Batting Average :" + " " + battingAverage(totalNumberOfHits, totalNumberOfBats));

//8. Calculate five test scores and print their average

let firstTestValue = 200;
let secTestValue = 300;
let thirdTestValue = 400;
let fourthTestValue = 450;
let fifthTestValue = 350;
let totalScore = (firstTestValue + secTestValue + thirdTestValue + fourthTestValue + fifthTestValue);
let avgScore = 0;

function avgTestScore(totalScore) {
  avgScore = totalScore / 5;
  return avgScore;
}
console.log("8.Average Test Scores :" + " " + avgTestScore(totalScore));

//9. Power of any number x ^ y

let x = 5;
let y = 4;
let powerOfNum;
function power(x, y) {
  powerOfNum = Math.pow(x, y);
  return powerOfNum;
}
console.log("9.Power of Number :" + " " + power(x, y));

//10. Calculate Simple Interest

const p = 4500;
let n = 650;
let r = 12;
let simpleInterest = (p * n * r) / 100
console.log("10.Simple Interest :" + " " + simpleInterest);

//11.Calculate area of an equilateral triangle

let triangle = 10;
let equilateralTriangle = (Math.sqrt(3)) * (1 / 4) * (Math.pow(triangle, 2));
console.log("11.Equilateral Triangle :" + " " + equilateralTriangle.toFixed(2));

//12.Area Of Isosceles Triangle

let a = 13;
let b = 24;
let areaOfIsoTriangle = (b / 2) * (Math.sqrt((a * a) - ((b * b) / 4)));
console.log("12.Area Of Isosceless Triangle" + " " + areaOfIsoTriangle);

//13.Volume Of Sphere

const radius = 10;
const pi = 3.14
let volumeOfSphere = (4 / 3) * (pi) * (Math.pow(radius, 3));
console.log("13.Volume Of Sphere :" + " " + volumeOfSphere.toFixed(2));

//14.Volume Of Prism

const area = 25;
const height = 30;
let volumeOfPrism = area * height;
console.log("14.Volume Of Prism :" + " " + volumeOfPrism);

//15.Find area of a triangle

let base = 20;
let h = 25;
let areaOfTriangle = (base * h) / 2;
console.log("15.Area of a triangle :" + " " + areaOfTriangle);

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product

let actualCost = 500;
let soldCost = 350;
let discountOfProduct = (actualCost - soldCost);
console.log("16.Discount Of Product :" + " " + discountOfProduct);

//17.Given their radius of a circle and find its diameter, circumference and area

let radiuz = 30;
const piValue = 3.14;
let diameterOfCircle = 2 * radiuz;
let circumferenceOfCircle = 2 * piValue * radiuz;
let areaOfCircle = piValue * (Math.pow(radiuz, 2));
console.log("17.Diameter Of Circle :" + " " + diameterOfCircle);
console.log("17.Circumference Of Circle :" + " " + circumferenceOfCircle);
console.log("17.Area Of Circle :" + " " + areaOfCircle);

//18.Given two numbers and perform all arithmetic operations

let value1 = 5;
let value2 = 2;
let addOpera = value1 + value2;
let subOpera = value1 - value2;
let mulOpera = value1 * value2;
let divOpera = value1 / value2;
let modOpera = value1 % value2;
let exponOpera = value1 ** value2;
let increOpera = ++value1;
let increOpera1 = value1++;
let decreOpera = --value2;
let decreOpera1 = value2--;
console.log("18.Addition Operator :" + " " + addOpera);
console.log("18.Subraction Operators :" + " " + subOpera);
console.log("18.Multiplication Operator :" + " " + mulOpera);
console.log("18.Division Operator :" + " " + divOpera);
console.log("18.Modulo Operator :" + " " + modOpera);
console.log("18.Exponentiation Operator :" + " " + exponOpera);
console.log("18.Increment Operator :" + " " + increOpera, increOpera1);
console.log("18.Decrement Operator :" + " " + decreOpera, decreOpera1);

//19.Display the asterisk pattern as shown below(No loop needed)

console.log("19.Asterisk Pattern :");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//20.Calculate electricity bill

let oneHourWatts = 100;
let oneDayWatts = 100 * 24;
let oneMonthWatts = oneDayWatts * 30;
console.log("20.One Month Watts :" + " " + oneMonthWatts);
let wattsToUnit = oneMonthWatts / 1000;
console.log("20.Watts to Unit Conversion :" + " " + wattsToUnit);
let oneUnitRate = 10;
let oneMonthUnitRate = wattsToUnit * oneUnitRate;
console.log("20.Calculate electricity bill :" + " " + oneMonthUnitRate);

//21.Program To Calculate CGPA

const marks = [90, 95, 87, 100, 94, 86];
let total = 0;
let marksTotal = 600;
for (let sub of marks) {
  total += parseInt(sub);
}
let cgpaMark = (total / marksTotal) * 10;
console.log("21.Calculate CGPA :" + " " + cgpaMark.toFixed(1))