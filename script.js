let number = parseInt(prompt("enter a number")); 
while(!number){
   number = parseInt(prompt("enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * number) + 1;
console.log(targetNum);
let guess =parseInt(prompt("enter your first guess"));
let attempt = 1;
while (parseInt(guess !== targetNum)){
    if (guess === "q"){
        break;
    }
    attempt++;
    if(guess>targetNum) {
        guess = parseInt(prompt("too high! enter a new guess"));
    }
    else{
        guess = parseInt(prompt("too low enter a new guess"));
    }
}
if(guess === "q"){
    console.log("ok, quitting");
}
else{
console.log("congrats");
console.log("you got this after", attempt, "attempts");
}