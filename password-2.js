const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// asks user for name, and incorporates name into greeting

reader.question("Enter your username: ", function(userName){

  console.log(`Welcome ${userName}!`);
                 
  reader.question("Enter your desired password: ", function (password){

// tests input to determine is any part of the string contains a number
    
    let containsNum = false;
    for( let i = 0; i < password.length; i++){
      if(!isNaN(password.charAt(i)) === true){
        containsNum = true;
       }
    }

// tests input to determine if length of string is >= 10 characters
    
    if(password.length >= 10 && containsNum === true){
      console.log("Your password meets the minimum security requirements!")
    } else {
      console.log("Try again. You did not meet the complexity requirements.");
    }
  reader.close();  

  })
  });

// experimenting with Number.isInteger

// let password = "apple4";
// console.log(password.charAt(5)); // logs 4 to console
// console.log(Number.isInteger(password.charAt(5))); // logs false