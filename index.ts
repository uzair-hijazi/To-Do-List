#! /usr/bin/env node

import inquirer from "inquirer";

let todoList = [];

let cond = true;

while (cond) {
  let addition = await inquirer.prompt([
    {
      name: "checklist",
      type: "input",
      message: "What do you want to add in checklist?",
    },
    {
      name: "addmore",
      type: "confirm",
      message: "Do you want to add more items?",
      default: "false",
    },
  ]);
  todoList.push(addition.checklist);
  cond = addition.addmore;
  console.log(todoList);
}
