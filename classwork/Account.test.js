const{bankAccount } = require("./Account.js");

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

    
test('test that Account can deposit money',()=>{
    let result = bankAccount.deposit(500);
    let answer = 500;
    expect(result).toBe(answer);
})

test('test that Account can withdraw', ()=>{
    let result = bankAccount.withdraw(500);
    let answer = 0;
    expect(result).toBe(answer)
})

