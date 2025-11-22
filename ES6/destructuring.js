const person = {
    head: {
        eyes: 'x1',
        mouth: {
            teeth: 'x2.1',
            tongue: 'x2.2'
        }
    },
    body: {
        shoulders: 'x11',
        chest: 'x2',
        arms: 'x3',
        hands: 'x4',
        legs: 'x5'
    }   
};

//const head = person.head;
const {head, body} = person;
console.log(head );

const {body:{shoulders : limbs }} = person;
console.log(limbs)






//arrays


const nums = [1, 2, 3,4,5,6,7,8];

const [last] = nums;
console.log(last)

const fruits = ['orange', 'apple', 'grapes', 'banana', 'mango'];

let [f1,,,f2] = fruits;
console.log(f1,f2);



//map
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructuring
let text = "";
for (const [key, value] of fruit) {
  text += key + " is " + value;
}

console.log(text)