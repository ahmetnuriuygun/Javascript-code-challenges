//!Problem Statement:
//? - Create a function that, given a number, returns the corresponding Fibonacci number.
//? - Examples:
             //? fibonacci(7) ➞ 21
            //? fibonacci(12) ➞ 233
//? The first number in the sequence starts at 1 (not 0).


fib=(a)=>{ 

    let fib = [1,1];

        for(let i = 2; i<=a; i++){
            fib[i] = fib[i-1] + fib[i-2]
        }
        console.log(fib[12])
}
fib(12);
