/*function log(message){
    console.log(message);
}*/

var message = 'hello world';

var x : any;

console.log( x);
console.log(typeof x);

x = undefined;
console.log( x);
console.log(typeof x);

x = null;
console.log( x);
console.log(typeof x);

enum Color {Red, Green, Blue} 
let c: Color = Color.Green;
console.log(c);
let colorName: string = Color[2]; 
console.log(colorName) ;
enum Color1 {Red = 1, Green, Blue} 
let colorName1: string = Color1[2]; 
console.log(colorName1); // Displays 'Green' as its value is 2 above


