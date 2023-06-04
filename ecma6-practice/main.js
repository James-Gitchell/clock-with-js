

// let y = "phil";

//     for (var i = 0; i < 5; i++){
    
//     console.log(i);
// }
// console.log(y)



// //Last in First out
// const array = [1,2,3]
// array.push(4)
// console.log(array)
// array.pop()
// console.log(array)

// const object = {name: "Ricky"};
// console.log(object)
// Object.name = "Bill";
// console.log(object.name)

//template literal
// interpolating the value

// let name = 'Erika';
// console.log("Hello, " + name + "!")

// console.log(`Hello, ${name}!`)


// arrow function

// // you dont need the curly bracket if there is only one var
// // also you dont need the brackets if there is only one command or line of code


// let greet = () => console.log('Greetings!');
// let greet = x => console.log()
// let greet = (x,y)

// destructuring

let[first, second, third] = ["Baseball, Football, Basketball"];
console.log(first)
console.log(second);
console.log(third);

let { name, age } = {name: "Richard", age: 25};
console.log(name);
console.log(age);

// spread operator

const ages= [18, 30, 56, 32]
const agescon= [...ages, 37, 43];
console.log(ages);
console.log(agescon);
