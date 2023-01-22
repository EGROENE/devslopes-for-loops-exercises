
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accountsWithWrongBalance = [];
  for (let acct of array) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    if (acct.deposits) {
      for (let amount of acct.deposits) {
        totalDeposits += amount;
      }
    }
    if (acct.withdrawals) {
      for (let amount of acct.withdrawals) {
        totalWithdrawals += amount;
      }
    }
    if ((totalDeposits - totalWithdrawals) !== acct.balance) {
      accountsWithWrongBalance.push(acct);
    } 
  }
  return accountsWithWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
