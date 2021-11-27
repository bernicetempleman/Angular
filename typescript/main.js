/*function log(message){
    console.log(message);
}*/
var message = 'hello world';
var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);
x = null;
console.log(x);
console.log(typeof x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var colorName = Color[2];
console.log(colorName);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName1 = Color1[2];
console.log(colorName1); // Displays 'Green' as its value is 2 above
