import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;
const message = "Welcome to ATM";
console.log(message);
let pin_answer = await inquirer.prompt({
    type: "number",
    name: "answer",
    message: "Please Enter Pin Code"
});
if (pin_answer.answer === 1234) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposit", "Withdraw", "Balance check", "Fast Cash"]
        });
        //-------------------------DEPOSIT---------------------------------------
        if (answer.list === "Deposit") {
            let answer = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "Please Enter your amount:"
            });
            if (answer.Deposit_amount > 0) {
                myBalance = myBalance + answer.Deposit_amount;
                console.log(myBalance);
            }
        }
        //---------------------WITHDRAW-----------------------------------------
        else if (answer.list === "Withdraw") {
            let answer = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "Please Enter amount"
            });
            if (answer.Withdraw_amount <= myBalance) {
                myBalance = myBalance - answer.Withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not enough money");
            }
        }
        //------------------FASTCASH--------------------------------------------
        else if (answer.list === "Fast Cash") {
            let answer = await inquirer.prompt({
                type: "list",
                name: "Fast_cash",
                message: "Please select one",
                choices: ["500", "1000", "2000", "5000"]
            });
            if (answer.Fast_cash <= myBalance) {
                if (answer.Fast_cash === "500") {
                    myBalance -= answer.Fast_cash;
                    console.log(myBalance);
                }
                else if (answer.Fast_cash === "1000") {
                    myBalance -= answer.Fast_cash;
                    console.log(myBalance);
                }
                else if (answer.Fast_cash === "2000") {
                    myBalance -= answer.Fast_cash;
                    console.log(myBalance);
                }
                else if (answer.Fast_cash === "5000") {
                    myBalance -= answer.Fast_cash;
                    console.log(myBalance);
                }
            }
        }
        //-----------------------------Balance Check----------------------------------
        else if (answer.list === "Balance check") {
            console.log(`Your Account balance is: ${myBalance}`);
        }
        //----------------------------While Condition---------------------------------
        let while_answer = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue?"
        });
        if (while_answer.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid Pin Code");
}
