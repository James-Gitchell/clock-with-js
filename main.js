// var myName = 'Bruce';
// let myLastName = 'Wayne';
// const myAge = 30;

// console.log(myLastName)


// // key value pairs
// // person = object;
// // firstName = Key
// // bruce = value


// const person = { 
//     firstName: 'Bruce',
//     lastName: 'Wayne',
//     age: 30
// }

// console.log("dirty" + " " + person.age)

//  const evenNumber = [2,4,6,8]

//  console.log(evenNumber[0] * 2)


// prompt for user input

var promptButton = document.getElementById('prompt');

promptButton.onclick = function() {
    var promptUserResponse = prompt("what is your name?");
    var promptDisplayContainer = document.getElementById('promptResponse');

    promptDisplayContainer.innerHTML = 'Hey, ' + promptUserResponse
}


// confirm box

var confirmButton = document.getElementById('confirm')

confirmButton.onclick = function() {
    var confirmUserResponse = confirm('Do you wish to continue?');
    var confirmDisplayContainer = document.getElementById('confirmResponse');
    var displayMessage = "";

    if (confirmUserResponse) {
        displayMessage += "Are you a Reds fan?";
    }
    else {
        displayMessage += "Are you a Yankees fan?";
    }
    confirmDisplayContainer.innerText = displayMessage;
}

// alert box
var alertButton = document.getElementById('alert');

alertButton.onclick = function(){
    alert("Lexus is super nice!")
}