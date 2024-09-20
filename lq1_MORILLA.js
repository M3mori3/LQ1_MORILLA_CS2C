//persona 1
let per1Name = "Las Marias Maria Delos Santos";
let per1Age = 25;
let per1Address = "Upper Session Road, Baguio City, Benguet";

const splitArray1 = per1Name + " " + per1Age +" "+ per1Address;
console.log(splitArray1);

//persona 2
let per2Name = "Dela Cruz Juan Gamoso";
let per2Age = 28;
let per2Address = "San Nicolas, Candon City, Ilocos Sur";

const splitArray2 = per2Name + " " + per2Age +" "+ per2Address;
console.log(splitArray2);

//sum of all numeric values
let per1 = per1Name.length + per1Address.length;
let per2 = per2Name.length + per2Address.length;
let addedAges = per1Age + per2Age;
let sumOfAll = per1 + per2 + addedAges;
const allPer = sumOfAll;

//subtracted name length from addedAges
let subtractedResult = addedAges - per1Name.length;

//subtractedResult multiplied by persona 2's length
let multiplied = subtractedResult * per2Name.length;

//raised number of each persona's length
let raisedLengths = per1Address.length ** per2Address.length;

//operation returns
console.log(allPer);
console.log(addedAges);
console.log(subtractedResult);
console.log(multiplied);
console.log(raisedLengths);
