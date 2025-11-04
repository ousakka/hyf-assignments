/* Age-ify (A future age calculator) */
let yearOfBirth=1999;
let yearFuture=2045;
let age=yearFuture-yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

/* Goodboy-Oldboy (A dog age calculator) */
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

let dogYear = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
    dogYear = dogYear * 7; 
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}

/* Housey pricey (A house price estimator) */
let houseHeightPeter = 10;
let houseWidthPeter = 8;
let houseDepthPeter = 10;
let houseVolumePeter = houseHeightPeter * houseWidthPeter * houseDepthPeter;
let gardenSizeInM2Peter = 100;

let housePricePeter = houseVolumePeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
if (housePricePeter <= 2500000) {
    console.log("Peter is paying too much");
} else {
    console.log("Peter is paying too little");
}

let houseHeightJulia = 8;
let houseWidthJulia = 5;
let houseDepthJulia = 11;
let houseVolumeJulia = houseHeightJulia * houseWidthJulia * houseDepthJulia;
let gardenSizeInM2Julia = 70;
let housePriceJulia = houseVolumeJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
if (housePriceJulia <= 1000000) {
    console.log("Julia is paying too much");
} else {
    console.log("Julia is paying too little");
}

/* Ez Namey (Startup name generator) */

let firstWords=["Easy","Smart","NextGen","Quick","Green","Tech","Bright","Future","Innovative","Dynamic"];
let secondWords=["Solutions","Systems","Technologies","Concepts","Designs","Ideas","Ventures","Labs","Works","Studios"];

let startupName;
let randomIndex=Math.floor(Math.random()*10);
startupName=firstWords[randomIndex]+" "+secondWords[randomIndex];
console.log("The starup name is "+startupName);