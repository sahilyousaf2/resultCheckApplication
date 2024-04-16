#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.magentaBright.bold.underline('\t "Welcome To codeWithSahil - Percentage Or Grade Check Application" \n'));
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: 'userAns',
            type: 'list',
            message: chalk.cyanBright.bold('Select Option'),
            choices: ['Check Percentage', 'Check Result', 'Exit']
        }
    ]);
    if (answer.userAns === 'Check Percentage') {
        const percentageAns = await inquirer.prompt([
            {
                name: 'obtainMarks',
                type: 'number',
                message: chalk.greenBright.bold('Enter Your Obtain Marks'),
            },
            {
                name: 'totalMarks',
                type: 'number',
                message: chalk.greenBright.bold('Enter Your Total Marks')
            }
        ]);
        let mark1 = (percentageAns.obtainMarks);
        let mark2 = (percentageAns.totalMarks);
        let percentage = (mark1 / mark2) * 100;
        console.log(chalk.yellowBright.bold.underline(' Your Percentage Is :' + Math.round(percentage) + '%'));
    }
    else if (answer.userAns === 'Check Result') {
        const marksAns = await inquirer.prompt([
            {
                name: 'marks',
                type: 'number',
                message: chalk.greenBright.bold('Enter Your Percentage Number:'),
            },
        ]);
        if (marksAns.marks >= 90 && marksAns.marks <= 100) {
            console.log(chalk.yellowBright.bold.underline('\t Your Result Is A+ Grade \n'));
        }
        else if (marksAns.marks >= 80 && marksAns.marks <= 89.9) {
            console.log(chalk.yellowBright.bold.underline('\t Your Result Is A Grade \n'));
            ;
        }
        else if (marksAns.marks >= 70 && marksAns.marks <= 79.9) {
            console.log(chalk.yellowBright.bold.underline('\t Your Result Is B Grade \n'));
            ;
        }
        else if (marksAns.marks >= 60 && marksAns.marks <= 69.9) {
            console.log(chalk.yellowBright.bold.underline('\t Your Result Is C Grade \n'));
            ;
        }
        else if (marksAns.marks >= 50 && marksAns.marks <= 59.9) {
            console.log(chalk.yellowBright.bold.underline('\t Your Result Is D Grade \n'));
            ;
        }
        else if (marksAns.marks >= 40 && marksAns.marks <= 49.9) {
            console.log(chalk.yellowBright.bold.underline('\t Your Result Is F Grade \n'));
            ;
        }
        else {
            console.log(chalk.redBright.bold.underline('\t You Are Faild \n'));
        }
    }
    else if (answer.userAns === 'Exit') {
        condition = false;
    }
    else {
        console.log(chalk.redBright.bold.underline('\t Please Enter Valid Input \n'));
    }
}
console.log(chalk.grey.bold.underline('\t Thanks You \n'));
