const bankAccount = { owner: "Alice", 
    balance: 500 ,
    deposit: function(amount){
        if(amount < 0) throw new Error
        if(amount = 0) throw new Error 
        bankAccount.balance += amount
        return bankAccount.balance

    },
     withdraw: (amount) => { 
        if (amount > bankAccount.balance) throw new Error
        if (amount < 0) throw new Error
        bankAccount.balance -= amount
        }
    }

module.exports = bankAccount
