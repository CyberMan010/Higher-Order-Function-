// map method #1
function mid(){
    let input = prompt("Type a nummer");
    let arr = input.split(" ");
    let square = input => Math.pow(input,2);
    square = arr.map(square);
    
    
    console.log(arr);
    console.log(square);
}
mid();
// --------------forEach method-------------------
