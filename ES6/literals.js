import { printH } from "./import_export.js";


//enhanced obj literals
let name = "Duke";
let color = "Brown";
let age = 5;

var dog = {name, color, age};
console.log(dog);

let a = printH(age, 10);
console.log(a)

let bark = function(){
    console.log(this.name + " => woof woof =>" + this.age+ "=>" +this.color)
} 

let dog2 = {name, color, age, bark}
console.log(dog2)
dog2.bark()