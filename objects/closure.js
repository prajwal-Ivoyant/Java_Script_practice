function outer() {
    let outerVar = "hi im the outer block";
    console.log(outerVar);
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
