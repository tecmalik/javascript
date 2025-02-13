    const bankAccount = { owner: "Alice", 
    balance: 500 ,
    deposit: function(amount){
        if(amount < 0) throw new TypeError("amount must be greater then 0");
        if(amount = 0) throw new TypeError("amount cant be 0");
        bankAccount.balance += amount
        return bankAccount.balance

    },
     withdraw: (amount) => { 
        if (amount > bankAccount.balance) throw new TypeError("insurficient funds");
        if (amount < 0) throw new TypeError("invald input");
        bankAccount.balance -= amount
        }
    }

module.exports = {bankAccount}