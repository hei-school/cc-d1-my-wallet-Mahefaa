[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hy8NMZUz)


# Wallet App

Here we design you a wallet exactly like your physical wallet with a bit of imagination!

### To run the app, execute the main file named file.
* JAVA: `javac src/main/java/Main.java && java src.main.java.Main`
* JavaScript: `node index.js`
* Python: `py main.py`
* Rust : `rustc main.rs && ./main.rs`
* Go: `go run main.go`

## Functionalities :
<strong> NB : functionality documentation is done as follows :
(return type) name (parameters -> optional) : description
</strong>

### Main functionalities are : 
<hr/>

1. (void) open: allows you to use all of your wallet's functionalities
<hr/>

2. (void) close : makes your wallet unusable until it's opened again
<hr/>

3. (double) getBalance : shows the current amount of money available in your wallet
<hr/>

4.  (double) withdraw ( double amount ) : withdraws a given quantity of money from your current amount and returns the updated current amount.
  produces an error if the given amount is more than your current balance
<hr/>

5. (Set<String>) storeCard (String cardName) : puts a card in your wallet in order to keep it safe.
For simplicity, to store a card we will only give its name.
<hr/>

6. (Set<String>) getCards () : gets all currently stored cards
<hr/>

7. (String) getCard (String cardName) : gets one of the stored cards by name, produces an error if given cardName is not present
<hr/>

8. (double) deposit (double amount): adds some money to your balance, produces error if amount is negative
#### Happy Coding !