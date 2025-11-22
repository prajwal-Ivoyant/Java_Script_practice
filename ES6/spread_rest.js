const obj1 = {
    name : "prajwal",
    age : 22,
    add : "shimoga"
}

const obj2 = {
    name : "anirudh",
    age : 23,
    add : 'mysore'
}

const obj3 = {
    clg_name : "jnn",
    add : "navule"
}

let combine1 = {...obj1, ...obj2};
console.log(combine1)

let combine2 = {...obj1,...obj3}
console.log(combine2)

//{ name: 'anirudh', age: 23, add: 'mysore' }
// { name: 'prajwal', age: 22, add: 'navule', clg_name: 'jnn' }


//arrays


let arr = [1,2,3,4,5,6,7,8];

const [one, two, ...rest] = arr;
console.log(one, '=>>', two,'=>>',rest)


/////////////rest///////////////...////////////

function collect(...nums){
    console.log(nums)
}

collect(1,2,3,4,5,6)


function names(a,b,...remains){
    console.log(`${a} \n ${b} \n ${remains}`);
    console.log(remains.indexOf('bhima'));
    console.log(remains.length)
    console.log(remains[0])
}

names('rama','hanuma','krishna','arjuna','bhima','karna','bishma','ekalavya')