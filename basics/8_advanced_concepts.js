// IIFE
// Immediately Invoked Function Expressions


(function logMyName(name){
    var surname = 'Aurelius'
    console.log(`My name is ${name} ${surname}`);
})('Marcus');

// IIFE is extremly powerful. IIFE's are widely used to create local scopes for libraries

const ifee = (function simple(name){
    var surname = 'Smith';
    return {
        logMyName: function(){
            console.log(`My name is ${name} ${surname}`);
        }
    }   
})('Lisa')

ifee.logMyName('Lisa')


// Closures
function createCounter() {
  /* 
  This is inner scope where counter local variable is declared.
  while declaring const increment innerFunction  is assigned to to that but this counter is stored in memory;
  If you construct new objects whithin closure You may be exposed to chance of memory leaks, be careful while using New keyword.
  */
  let counter = 0
  const createNewScope = function() {
     // local execution context
     // set up debugger here
     counter = counter + 1;
    return counter;
  }
 return createNewScope;
}

const increment = createCounter()
const one = increment()
const two = increment()
const three = increment()

console.log('example increment', one, two, three)