#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Welcome To Huzaifa - CLI-NUMBER-GUESSING-GAME\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "enter your number(number limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(" congratulations ! you guess a correct number.");
}
else {
    console.log(" sorry , you guess a wrong number");
}
