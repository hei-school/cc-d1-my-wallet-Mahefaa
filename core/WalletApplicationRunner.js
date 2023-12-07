import tryCatchLogger from "../utils.js";

export default class WalletApplicationRunner {
    wallet;
    userInputReader;
    isRunning;

    constructor(wallet, userInputReader) {
        this.wallet = wallet;
        this.userInputReader = userInputReader;
        this.isRunning = false;
    }


    run() {
        this.isRunning = true;

        this.showMenu();

        this.userInputReader.question("", (answer) => {
            this.continuedTryCatchLogger(() => this.handleChoice(parseInt(answer)))
        })
    }

    stop() {
        this.isRunning = false
    }

    showMenu() {
        this.showWalletState();
        console.log(`
            Wallet Menu:
                    1. Open
                    2. Close
                    3. Get Balance
                    4. Withdraw
                    5. Store Card
                    6. Get cards
                    7. Get Card
                    8. Deposit
                    0. Exit
                    Enter your choice:
        `)
    }

    showWalletState = () => {
        console.log(`Wallet : {isOpen : ${this.wallet.isOpen}}`)
    }

    handleChoice(choice) {
        switch (choice) {
            case 1: {
                this.wallet.open();
                break;
            }
            case 2 : {
                this.wallet.close();
                break;
            }

            case 3 : {
                let balance = undefined;
                //catcher for consistency
                tryCatchLogger(() => {
                    balance = this.wallet.getBalance();
                }, () => {
                    if (balance === undefined){
                        throw new Error("balance must not be undefined")
                    }
                })
                console.log(`current balance is ${balance}`);
                break;
            }

            case 4 : {
                this.userInputReader.question("enter amount to withdraw ; ", answer => {
                    this.continuedTryCatchLogger(() => this.wallet.withdraw(parseInt(answer)));
                })
                break;
            }

            case 5 : {
                this.userInputReader.question("enter card name to store ; ", answer => {
                    this.continuedTryCatchLogger(() => this.wallet.storeCard(answer));
                })
                break;
            }
            case 6 : {
                tryCatchLogger(this.wallet.getCards, () => {
                });
                break;
            }
            case 7 : {
                this.userInputReader.question("enter card name to retrieve ; ", answer => {
                    this.continuedTryCatchLogger(() => this.wallet.getCard(answer));
                })
                break;
            }
            case 8 : {
                this.userInputReader.question("enter amount to deposit ; ", answer => {
                    this.continuedTryCatchLogger(() => this.wallet.deposit(parseInt(answer)));
                })
                break;
            }
            case 0: {
                this.stop()
                break;
            }
            default : {
                throw new Error("unknown Argument")
            }
        }
    }

    continue() {
        if (this.isRunning) {
            this.run();
        } else {
            console.log("Wallet application closed")
            process.exit(0)
        }
    }

    continuedTryCatchLogger = (tryCb) => {
        tryCatchLogger(tryCb, () => this.continue())
    }
}