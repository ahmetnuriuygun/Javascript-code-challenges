//!Problem Statement:
//? - Write a function that takes an array of characters and reverses the letters in place.
//? - Please note that, single word should not be reversed!
//? - Example:
            //? reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC 
            //? reverse("Happy") ➞ yppaH


reversed=(a)=>{
    b = a.split("");
    c= b.reverse().join("");
    console.log(c)
}
reversed("Clarusway Rocks!");
reversed("Happy");