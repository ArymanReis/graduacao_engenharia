class CustomerAccount {

  constructor(accountNumber, balance, debit, credit) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.debit = debit;
    this.credit = credit;
  }
  calculateCurrentBalance() {
    return this.balance - this.debit + this.credit;
  }

  checkBalance() {
    const currentBalance = this.calculateCurrentBalance();

    if(currentBalance >= 0) {
      alert("Saldo positivo! " + currentBalance);
    } else {
      alert("Saldo negativo R$ " + currentBalance);
    }
  }
}

let numberAccount = prompt("Digite o número da conta");
let balanceValue = parseFloat(prompt("Digite o saldo"));
let debitValue = parseFloat(prompt("Digite o débito"));
let creditValue = parseFloat(prompt("Digite o crédito"));

let account = new CustomerAccount(numberAccount, balanceValue, debitValue, creditValue);

account.checkBalance();

