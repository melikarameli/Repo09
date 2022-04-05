// Only change code below this line
function switchCase(letter) {
    var animals = "";
    switch (letter) {
        case "a":
            console.log(animals = "antelope");
            break;
        case "b":
            console.log(animals = "bird");
            break;
        case "c":
            console.log(animals = "cat");
            break;
        default:
            console.log(animals = "stuff");
            break;
    }
}
switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase(4);
// Only change code above this line
module.exports = switchCase;