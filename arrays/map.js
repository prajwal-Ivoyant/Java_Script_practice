const str = ['rama', 'lakshmana', 'nemi', 'hanuma', 'baratha', 'ravana', 'vali', 'sugriva']

str.forEach(e => {
    console.log(e)
});


// filter

const str2 = str.filter(e=>{
    return e.length > 4;
})

console.log(str2)


//Every 

const bool = str.every(e=>{
    return e.length > 4;
})

console.log(bool)


// reduce 

const nums = [1,2,3,4,5,6,7,8];

const total = nums.reduce((accumulator, cValue)=>{
    return accumulator+cValue;
})

console.log(total)


const random_nums = [3,5,2,34,54,63,22,32,435]

let min = random_nums.reduce((min, curr)=>{
    if(curr < min) return curr;
    return min
})

console.log(min)

let max = random_nums.reduce((max, curr)=>{
    if(curr > max) return curr
    return max
})
console.log(max)