//
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = 23
console.log("I've been alive for more than [x] seconds!")

//
const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;

const salesTotal = retailPrice * quantity;

const profit = salesTotal - wholesalePrice * quantity;

const profitPerUnit = profit / quantity;

//
const HTMLBadges = parseFloat(prompt("How many HTML badges do you have?"));
const CSSBadges = parseFloat(prompt("How many CSS badges do you have?"));

const totalBadges = HTMLBadges + CSSBadges;
console.log(totalBadges);
console.log(typeof HTMLBadges, typeof CSSBadges) //verifies the "type of" operator that is being used.

// parseInt() coverts a string to an integer(a whole number without a decimal point ex. 26.50
// parseFloat() is used for getting a string value and returns a floating point value. basically used for decimal numbers and whole numbers.