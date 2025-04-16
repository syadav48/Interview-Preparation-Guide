function createAccount(initialBalance) {
    let balance = initialBalance; // Private variable
  
    return {
      deposit: function(amount) {
        balance += amount;
        console.log(`New balance: ${balance}`);
      },
      withdraw: function(amount) {
        if (amount > balance) {
          console.log("Insufficient funds!");
        } else {
          balance -= amount;
          console.log(`Remaining balance: ${balance}`);
        }
      },
      getBalance: function() {
        return balance;
      }
    };
  }
  
  const account = createAccount(100);
  account.deposit(50); // New balance: 150
  account.withdraw(30); // Remaining balance: 120
  console.log(account.balance); // undefined (private)
  console.log(account.getBalance()); // 120 (controlled access)