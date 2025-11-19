/* Flight booking fullname function */

/* const firstName="chantal";
const surName="Duval";

function getFullName(firstName,surName)
{
  if (!firstName || firstName.trim() === " ") {
     return "You did not provide first name"  
}
       if (!surName|| surName.trim() === " ") {
     return "You did not provide surname"  
}
    return firstName+" "+surName;
}

console.log(getFullName(firstName,surName)); */

/* Formal fullname */

const firstName = "Benjamin";
const surName = "Hughes";
const gender = "male";
const useFormalName = true;

function getFullName(firstName, surName, useFormalName) {
  if (!firstName || firstName.trim() === " ") {
    return "You did not provide first name";
  } else if (!surName || surName.trim() === " ") {
    return "You did not provide surname";
  } else if (useFormalName === true && gender === "male") {
    return "Lord " + firstName + " " + surName;
  } else if (useFormalName === true && gender === "female") {
    return "Lady " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}

console.log(getFullName(firstName, surName, useFormalName, gender));

/* Event application */
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekday(daysFromToday) {
  const today = new Date();
  const todayIndex = today.getDay();

  const eventIndex = (todayIndex + daysFromToday) % 7;

  return weekdays[eventIndex];
}

console.log(getEventWeekday(9));

/* Weather wear */
const todayTemperature = 0;
function whatToWear(todayTemperature) {
  if (todayTemperature <= 0) {
    return "a heavy coat, gloves, and a scarf";
  } else if (todayTemperature > 0 && todayTemperature <= 10) {
    return "a jacket and warm pants";
  } else if (todayTemperature > 10 && todayTemperature <= 15) {
    return "a sweater or long-sleeve shirt";
  } else {
    return "shorts and a t-shirt";
  }
}

console.log(whatToWear(todayTemperature));

/* Student manager */
const class07Students = [];
function addStudentToClass(studentName) {
  const length = class07Students.length;

  if (studentName === " ") {
    console.log("The student name is invalid");
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log("Welcome Queen");
  } else if (length >= 6) {
    console.log("Cannot add more students to class 07");
  } else if (class07Students.includes(studentName)) {
    console.log("Student" + studentName + "is already in the class");
    return;
  } else {
    class07Students.push(studentName);
    console.log(studentName + " has been added to class 07");
  }
}

function getNumberOfStudents() {
  return "The number of students in class 07 is" + class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Sarah");
addStudentToClass("Thomas");
addStudentToClass("Anna");
addStudentToClass("Peter");
addStudentToClass("Maria");
addStudentToClass("Queen");

/* Candy helper */

let boughtCandyPrice = [];

function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    console.log("Unknown candy type!");
  }

  const price = pricePerGram * weight;
  boughtCandyPrice.push(price);
}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 5);

console.log(boughtCandyPrice);

let amountToSpend = Math.random() * 100;
let totalPrice = 0;
function canBuyMore() {
  for (let i = 0; i < boughtCandyPrice.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }

  console.log("Total spent: ", totalPrice);

  if (totalPrice < amountToSpend) {
    console.log("You can buy more, so please do!");
    return true;
  } else {
    console.log("Enough candy for you");
    return false;
  }
}
