const obj = { 
    name: 'rama 3', 
    pet_name: 'jerry', 
    add: 'dvg', 
    state: 'karnataka' 
}

Object.freeze(obj);

obj.add = 'smg';

console.log(obj)