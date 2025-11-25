const alphas = new Set(['A','a','b'])

console.log(alphas)

alphas.add(1)
alphas.add(3)
alphas.add('a')

console.log(alphas)

for(let a of alphas){
    console.log(a)
}