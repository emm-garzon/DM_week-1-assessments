const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "\r\n  _____                                    _  __      __   _ _     _       _               _______          _ \r\n |  __ \\                                  | | \\ \\    / /  | (_)   | |     | |             |__   __|        | |\r\n | |__) |_ _ ___ _____      _____  _ __ __| |  \\ \\  / /_ _| |_  __| | __ _| |_ ___  _ __     | | ___   ___ | |\r\n |  ___/ _` / __/ __\\ \\ /\\ / / _ \\| '__/ _` |   \\ \\/ / _` | | |/ _` |/ _` | __/ _ \\| '__|    | |/ _ \\ / _ \\| |\r\n | |  | (_| \\__ \\__ \\\\ V  V / (_) | | | (_| |    \\  / (_| | | | (_| | (_| | || (_) | |       | | (_) | (_) | |\r\n |_|   \\__,_|___/___/ \\_/\\_/ \\___/|_|  \\__,_|     \\/ \\__,_|_|_|\\__,_|\\__,_|\\__\\___/|_|       |_|\\___/ \\___/|_|\r\n                                                                                                              \r\n                                                                                                              \r\n"
);

// console.log("Welcome to the 'Password Validator Tool'"); // original greeting before ASCII art

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
