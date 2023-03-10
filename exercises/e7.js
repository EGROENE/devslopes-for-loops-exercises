// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  let acctsWithBalanceOverZero = [];
  let acctWithLowestBalanceOverZeroArray = [];
  let acctWithLowestBalanceOverZero;
  for (let acct of array) {
    if (acct.balance > 0) {
      acctsWithBalanceOverZero.push(acct);
      for (let i = 0; i < acctsWithBalanceOverZero.length; i++) {
        acctWithLowestBalanceOverZero = acctsWithBalanceOverZero[0];
        let currentAccount = acctsWithBalanceOverZero[i];
        if (currentAccount.balance < acctWithLowestBalanceOverZero.balance) {
          acctWithLowestBalanceOverZero = currentAccount;
        }
      }
    }
  }
  acctWithLowestBalanceOverZeroArray.push(acctWithLowestBalanceOverZero);
  return acctWithLowestBalanceOverZeroArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
