// Only change code below this line
function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
       myNumbers += " " + i;
        i++;
        } while (i < 10);
    return myNumbers;
}
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;