
const button = document.querySelector(".button")
const result = document.querySelector(".result")
const red = document.querySelector(".red")
let vowelsOfText = 0 

vowels = ["a","e","i","o","u","A","E","I","O","U"]




//! We find the number of vowels
const findVowels=(textArray)=>{
    textArray.map((e)=>{
        if(vowels.includes(e)){
            vowelsOfText ++
            
        }
    })
}



//! We display to screen when it's clicked to button
button.onclick=()=>{
    const text = document.getElementById("input").value
    const textArray = text.split("") 
    
  

    findVowels(textArray)
    updateScreen(text);
}


//! Update screen function
const updateScreen=(text)=>{
    red.style.color = "red";
    red.style.font = "24px";
    result.textContent = `
    There are ${vowelsOfText} vowels in this ` ;
    red.textContent = `${text}`
}    






