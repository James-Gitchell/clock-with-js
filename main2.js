
// Three States of a Promise
// Pending
// Fulfilled
// Rejected

// Two methods
// .then
// .catch

// Asynchronus

// GET--getting data
fetch('https://swapi.dev/api/people/1/')
.then(response => response.json())
.then(data => console.log('character: ', data.name))

.catch(error => console.log("Error: ", error));

// POST--sending data
let characterData = {
    name: 'Spock',
    height: '100' 
}
{
let requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(characterData)
};
}

// PUT--update existing data
let updatedCharacterData = {
    name: 'spongebob',
    height: '200'
};

let requestOptions = {
    method: 'Put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedCharacterData)
};

fetch('https://swapi.dev/api/people/1/', requestOptions)
.then(response => response.json())
.then(data => console.log('Put response: ', data))
.catch(error => console.log('Error: ', error))

{
// DELETE
 let requestOptions = {
    method: 'DELETE'
 };

 fetch('https://swapi.dev/api/people/1/', requestOptions)
 .then(response => response.status)
 .then(status => console.log('Delete response: ', status))
 .catch(error => console.log('Error: ', error))


 
}