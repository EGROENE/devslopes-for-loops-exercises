
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let accountsWithDepositSumsUnder2000OrNoDeposits = [];
  for (let acct of array) {
    let depositsSum = 0;
    if (acct.deposits) {
      for (let amount of acct.deposits) {
        depositsSum += amount;
      }
    }
    if (depositsSum < 2000 || !acct.deposits) {
      accountsWithDepositSumsUnder2000OrNoDeposits.push(acct);
    }
  }
  return accountsWithDepositSumsUnder2000OrNoDeposits;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
