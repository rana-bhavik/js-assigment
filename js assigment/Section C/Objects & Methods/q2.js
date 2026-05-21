let account = {


accountno : "ACC123",
Name      : "suraj",
Balance   : 10000,



deposite : function(amot){
if(amot <= 0){
  return "invalid amout";
}




this.Balance += amot
return `${amot} deposit susccfully`;
}
,


witdrow : function(amt){
if(amt <= 0){
return "invalid amount"
}

if(amt > this.Balance){
return "insuficiant balance"
}


this.Balance -= amt
return `${amt} withdrow amount susessfully`;
}



,

getsummry : function(){
    return `total statment 
             Account No : ${this.accountno},
             Name        : ${this.Name},
             Balace      : ${this.Balance}`
}
,



transfer : function(amt){
if(amt <= 0){
return "invali amount"
}

if(amt > this.Balance){
return "insuficiant balance"
}


this.balance -= amt
this.balance += amt

return `tranfer ${amt} amount in ${BankAccount2.owner}`;
},


// show : function(){
// return `neha balance amount is ${BankAccount2.balance}`
// }






}
let BankAccount2 = {
  accountNumber: "ACC54321",
  owner: "Neha",
  balance: 5000
};




console.log(account.deposite(10000));
console.log(account.witdrow(5000));
console.log(account.getsummry());
console.log(account.transfer(5000));
console.log(account.show());






