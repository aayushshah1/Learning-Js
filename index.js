//var -> function
//let -> block
//const -> block

function helloworld() {
    for(i=0; i<5; i++){
        console.log(i)
    }
}

helloworld();

//Object in javascript is collection of key value pairs
//If we have a function inside an object it is referred as method

const job = {
    title: 'Employee',
    Salary() {},
    Hours() {}
}

job.Hours = function(hours){
    this.hours = hours;
};

job.Hours(40);

job.Salary = salary => salary = hours*1000;


const ChangeTitle = 'title';
job [ChangeTitle] = 'Manager';

console.log(job);

//this
const person = {
    name: 'aayush',
    walk() {
        console.log(this);
    }
};

person.walk();

//in js functions are objects, they have properties and methods we can use
//imp method in react apps - bind is used to permanently set alue of 'this'
const walk = person.walk.bind(person);
walk();
//so when we call bind under walk function line 48 after = , it creates a new walk function is based on the arguement we have passed 




//Arrow functions
// can remove the function keyword and the parameter has to be written in paranthesis - if 1 para - no need 
//instead of return directly after fat arrow =>

//old syntax
const square0 = function(number) {
    return number * number;
}

//new syntax
const square1 = number => number * number;
console.log(square1(5));

//arrow functions are useful in arrays for filtering, etc 



//arrow function & this
//initially a call back function inside an object, 'this' had to be declared outside the callback uisng var
//but now by using arrow function the 'this' points to the object person directly


//Array.map()
const colors = ['blue', ' green', 'red '];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//instead of using "li" + var + "/li"  - we can use template literals
//template literal is `li${var}/li` example above



//object destructuring
const address = {
    street: '',
    city: '',
    country: ''
};

//old method
const street = address.street;
const city = address.city;

//instead
const {street: st , city: ct , country } = address;


//spread operator [...]
//uisng objects

const second = { job: 'Intern' };
const first = { name: 'Aayush' };

const combined = { ...first, ...second, status: 'learning'};
console.log(combined);

//spread can be used to make clone aswell




//Classes
//when we have an object with atleast one method we need a blueprint to create onject of that type so we need classes
//First letters always capital


// class Person1 {
//     constructor(name) {
//         this.name = name;
//     }

//     walk( ) {
//         console.log("walk");
//     }
// }

// const person1 = new Person1('Aayush');
// person1.name


// //inheritance

// class Teacher extends Person1 {
//     constructor(name, degree){
//         super(name);
//         this.degree = degree;
//     }

//     teach() {
//         console.log("Teach");
//     }
// }

import { Teacher } from "./Teacher";

const teacher = new Teacher("Aayush", "Btech");
teacher.teach();

//Modularity 
//It can be achieved using export function 

//Named Export in modularility
//Default -> import ... from '';
//Named -> import { ... } from '';

//---------------------------------------------


//Callback function

