#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition1 = true;
let condition2 = true;
while (condition1) {
    let addTodos = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add  in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Are you sure you want to add something in your todos?",
            default: "false"
        },
    ]);
    todos.push(addTodos.firstQuestion);
    condition1 = addTodos.secondQuestion;
    console.log(todos);
}
;
while (condition2) {
    let askUser = await inquirer.prompt([
        {
            name: "thirdQuestion",
            type: "input",
            message: "Do you like to remove something in your todos list?"
        },
        {
            name: "fourthQuestion",
            type: "confirm",
            message: "Are you sure you want to remove something?",
            default: "false"
        }
    ]);
    todos.pop();
    condition2 = askUser.fourthQuestion;
    console.log(todos);
}
;
