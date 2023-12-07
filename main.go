package main

import (
	"bufio"
	"os"
)

func main() {
	wallet := NewWallet()
	scanner := bufio.NewScanner(os.Stdin)
	runner := NewWalletApplicationRunner(wallet, scanner)
	runner.Run()
}
