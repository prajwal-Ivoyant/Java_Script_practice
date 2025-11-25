const nums = [1,2,3,4,5,6,7,8,9,10];

const str1 = ['123abc'];
const str2 = ['xyz'];

nums.pop();
console.log("pop :",nums)
nums.shift();
console.log("shift :",nums)
nums.unshift(1212);
console.log("unshift :",nums)

console.log("indexof :",nums.indexOf(5))

nums.reverse();
console.log("reverse :",nums)

console.log("slice :",nums.slice(3,7))

console.log("includes :",nums.includes(12))


str1.splice(1,3,"abcdefgh","abcd")
console.log("splice",str1)

nums.sort()
console.log("sort",nums)

str1.concat(str2);
console.log("conscat :",str1)


console.log("tostring",nums.toString())
