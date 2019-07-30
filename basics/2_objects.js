const tutorial = {
    greeting : 'Hi there',
    target: 'Student',
    studentNumber: 2,
    exampleMethod: ()=>{
        const firstName = 'Marcus';
        console.log('Hi ', firstName + '!');
    }
};

// Pretty print
// console.log(JSON.stringify(tutorial,null, 2));

console.log(tutorial);
// Using properties
console.log(`${tutorial.greeting} ${tutorial.target}! Your number is ${tutorial.studentNumber}`)


tutorial.exampleMethod();

// example of deconstructuring

// const { greeting, target, studentNumber} = tutorial;
// console.log(`${greeting} ${target}! Your number is ${studentNumber}`)

// let changedTutorial = Object.assign(tutorial, { greeting: 'Hello'});
// const { greeting, target, studentNumber} = changedTutorial; // Gived you error cause you have already used those variable names

// console.log(`${changedTutorial.greeting} ${changedTutorial.target}! Your number is ${changedTutorial.studentNumber}`)

// changedTutorial = 'Javascript variable types are not static , you can change them on the fly.'

// console.log(changedTutorial);