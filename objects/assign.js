let obj1 = {
    name : 'prajwal',
    age : 22
}

let obj_job ={
    id : 111,
    place : "smg"
}

const copy = Object.assign({}, obj1, obj_job)

console.log(copy)

let str1 = {
    name : 'rama',
    pet_name : 'tommy'
}

let str2 = {
    name : 'rama the great',
    pet_name : 'jerry',
    add : 'dvg'
}

let str3 = {
    name : 'rama 3',
    state : 'karnataka'   
}

const combine_str = Object.assign({}, str1, str2, str3)
console.log(combine_str)