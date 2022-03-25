const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the 'Password Validator Tool'");

reader.question("Please enter your password: ", function (input) {
  if (input.length >= 10) {
    console.log(
      `Success! Your password is ${input.length} characters long, and meets the security requirements!`
    );
  } else {
    console.log(
      `Please try again. Your password is only ${input.length} characters long, and does not meet the minimum security requirements.`
    );
  }
  reader.close();
});
