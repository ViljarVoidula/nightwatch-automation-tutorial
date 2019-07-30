// Function expression
const addTwoNumbers = function(a, b, callback){
    // console.log(arguments);
    // console.log(this);
    console.log(`Adding two numbers ${a} and ${b}`)
    if (callback) {
        callback()
    }
    return a + b;
};



// Function declaration
function addNumbers(){
    // console.log(arguments)
    // console.log(this);
    let sum = Object.values(arguments).reduce((a,b) => a + b);

    console.log(`Sum of all arguments is: ${sum}`);
    return sum;
}


// Arrow functions
const addTwoNumbersWithArrow = (a, b)=>{
    // console.log(this);
    console.log(`Adding two numbers ${a} and ${b}`)
    return a + b;
};


addNumbers(2,3,5);
// addTwoNumbers(2,3);
// addTwoNumbersWithArrow(5,5);

// What is a callback?? 

// addTwoNumbers(9,9,()=>{
//     console.log('Callback function')
// });


//Local  Scope vs Global Scope
// var surname = 'Smith'
// let name = 'Joseph'

// function exampleScope(arg){
//     console.log(`${name} ${surname}`)
//     let name = arg;
//     surname = 'Aurelius';
//     console.log(`${name} ${surname}`)
// }

// exampleScope('Marcus');

module.exports = {
    addTwoNumbersWithArrow,
    addNumbers
};