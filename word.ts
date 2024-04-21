#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright("\n               WELCOME TO BISMA'S WORD AND LETTER COUNTER GAME                 \n"));
// Loop
let projectContinue = true;
while (projectContinue === true) {

    //Select Options
    const select = await inquirer.prompt([{
            name: "one",
            type: "list",
            message: "Select One Option",
            choices: ["Letter Count", "Word Count"]
        }])

    //Letter Select
    if (select.one === "Letter Count") 
    { let answer = await inquirer.prompt
        ([{
                name: "sentence",
                type: "input",
                message: "Write your sentence to count letters!"
            }])

        let letterSpace = answer.sentence.trim().split(" ").join("");
        let countLetters= (chalk.bold.yellow(letterSpace.length));
        console.log(chalk.bold.cyanBright('In this sentence there ' + countLetters  ,'letters'));


        //Word Select
    } else if (select.one === "Word Count") {
        let answer = await inquirer.prompt([
            {
                name: "sentence",
                type: "input",
                message: "Enter your sentence to count words!"
            }
        ])
        let sentenceSpace = answer.sentence.trim().split(" ")
        let countWords = (chalk.bold.yellow(sentenceSpace.length));
        console.log(chalk.bold.cyanBright("In this sentence there  " + countWords , 'words'));
       {break ;}
}

console.log(chalk.bold.magentaBright(" Thanks to use my application "))};