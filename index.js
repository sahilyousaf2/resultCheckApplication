import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.magentaBright.bold('\n \t Welcome To codeWithSahil - Result Checker Application \n'));
let condition = true;
while (condition) {
    const marksAns = await inquirer.prompt([
        {
            name: 'marks',
            type: 'number',
            message: chalk.greenBright.bold('Enter Your Marks'),
        },
    ]);
    if (marksAns.marks >= 90 && marksAns.marks <= 100) {
        console.log(chalk.yellowBright.bold('\n \t Your Result Is A+ Grade \n'));
    }
    else if (marksAns.marks >= 80 && marksAns.marks <= 89.9) {
        console.log(chalk.yellowBright.bold('\n \t Your Result Is A Grade \n'));
        ;
    }
    else if (marksAns.marks >= 70 && marksAns.marks <= 79.9) {
        console.log(chalk.yellowBright.bold('\n \t Your Result Is B Grade \n'));
        ;
    }
    else if (marksAns.marks >= 60 && marksAns.marks <= 69.9) {
        console.log(chalk.yellowBright.bold('\n \t Your Result Is C Grade \n'));
        ;
    }
    else if (marksAns.marks >= 50 && marksAns.marks <= 59.9) {
        console.log(chalk.yellowBright.bold('\n \t Your Result Is D Grade \n'));
        ;
    }
    else {
        console.log(chalk.redBright.bold('\n \t You Are Faild \n'));
    }
    let againAns = await inquirer.prompt([
        {
            name: 'again',
            type: 'confirm',
            message: chalk.blueBright.bold('Do You Want Again Check Your Result'),
            default: false
        }
    ]);
    condition = againAns.again;
}
;
console.log(chalk.grey.bold('\n \t Thanks You \n'));
