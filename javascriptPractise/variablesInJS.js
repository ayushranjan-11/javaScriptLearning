//Variables in javascript
var a = 12;

function test(){
    var b = 14;
    console.log(a);
    console.log(b); //This is resticted under the function test() so accessing this variable is restricted inside of the function
}
test(); //This is required to call any function
console.log(a); //As "a" is global variable it can be accessed anywhere