const maxmumNumber = parseInt(prompt("enter the maximum Number"));
while(!maxmumNumber){   //if your maxm number is not int (NaN) then 
    maxmumNumber = parseInt("enter a valid Number ");
}

const targetNumber = Math.floor(Math.random()*maxmumNumber ) +1;

let guess = parseInt(prompt("Enter your first guess "));
let attempts =1;


while(parseInt(guess) !== targetNumber){
    if(guess === 'q') break;

    attempts++;
    if(guess>targetNumber){
        guess = prompt("too high enter a new guess")
    }
    if(guess<targetNumber){
        guess = prompt("too low , enter a new guesss")
    }
}
if(guess=='q'){
    console.log("ok , quit it")
} else{
    console.log(`You got it in ${attempts} attempts wow`);
    
}