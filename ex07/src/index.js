// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    console.log(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
}
randomRangeNumber(1, 20);
// Only change code above this line
module.exports = randomRangeNumber;