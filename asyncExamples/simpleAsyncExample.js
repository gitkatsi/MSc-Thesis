// Simple example of non blocking I/O
// Author: Georgios Katsikiotis

console.log("1");
console.log("2");
//call the console.log function after 3 seconds
setTimeout(() => {
    console.log("3");
}, 3000);
//continue to print the last value
console.log("4");

/*
The expected result after running the code:
>1
>2 
...3 seconds of delay
>3 
>4

The actual output
>1
>2
>4
...3 seconds of delay
>3
*/