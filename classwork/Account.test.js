const{bankAccount} = require("./Account.js");

    
test('test that Account can deposit money',()=>{
    let result = bankAccount.deposit(500);
    let answer = 500;
    expect(result).toBe(answer);
})

test('test that Account can withdraw', ()=>{
     bankAccount.withdraw(400);
    let result = bankAccount.balance
    let answer = 100;
    expect(result).toBe(answer)
})
test('test that nagative amount cant be withdrawed ',()=>{
    
    expect(()=>bankAccount.withdraw(-1000)).toThrow("invald input")
    expect(()=>bankAccount.withdraw(1000)).toThrow("insurficient funds")
})


