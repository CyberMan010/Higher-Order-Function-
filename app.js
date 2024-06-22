// map method #1
// let input = prompt("Type a nummer");
// let arr = input.split(" ");
// function mid(arr) {
//     let square = input => Math.pow(2,input);
//     square = arr.map(square);
    
//     console.log(arr);
//     console.log(square);
// }
// mid(arr);
// --------------forEach method-------------------
// let input = prompt("Type a nummer");
// let arr = input.split(" ");
// let array = [];
// function mid(arr) {
//     let square = input => array.push(Math.pow(2,input));
//     arr.forEach(square);
//     console.log(arr);
//     console.log(array);
// }
// mid(arr);
// --------for--------
// let input = prompt("Type a nummer");
// let arr = input.split(" ");
// let array = [];
// function mid(arr) {
    
//     for (let i = 0; i < arr.length; i++){
//         array.push(Math.pow(2, arr[i]));
//     }
//     console.log(arr);
//     console.log(array);
// }
// mid(arr);
// ---------------task2-------------

// let even = [5,2,"name"];
// function mid(arr) {
//     return arr.map(function (num) {
//         if (typeof num !== "number") {
//             return 'N/A';
//         } else if (num % 2 == 0) {
//             return 'even';
//         } else {
//             return 'odd';
//         }
//     })
    
    
   
// }
// let result = mid(even);
// console.log(result);

// -------task3-----------
// const arr = ["Rawan", "Wesam", "Hind", "Muhammed", "Esraa", "Dareen"]
// arr.forEach((arr) => {
//     console.log(arr);
// });
// --------Task4----------

// function fizzbuzz(array) {
//     let output = [];
   
//     array.forEach((fixing) => {
//         let number = parseInt(fixing, 10);
//         if ((number) % 5 == 0 && number % 3 == 0) {
//             output.push("Fizz Buzz");
//         } else if (number % 5 == 0) {
//             output.push("Buzz");
//         } else if (number % 3 == 0) {
//             output.push("Fizz");
//         } else {
//             output.push(number);
//         }
//     });
//     return output;
       

   
// }

// console.log(fizzbuzz(prompt().split(" ")));