/*
create an object to specify data of customer in a bank. the data to be stored is : account Number, Name, balance.

create a method called as transaction which takes 2 args amount and code ( for deposite, 0 for withdraw)
create a method the display the current balance for the customer
if the withdrawal amount is more than the balance then display "he balance is insufficient for the specified withdrawal"
*/

class Customer{
    constructor(accNo, name, balance){
        this.accNo=accNo
        this.name=name
        this.balance=balance

    }
    getBalance(){
        return this.balance

    }
    transaction(amount, code){
        if(code==1){
            this.balance+=amount
            return this.getBalance()
        }

        else if(code==0){
            if(amount>this.balance){
                return 'insufficient funds'
            }
            else{
                this.balance-=amount
                return this.getBalance()
            }
        } 

    }

}
const c1 = new Customer('SBI123', 'EMP1', 1500 )
console.log(c1.balance)
console.log(c1.getBalance())
console.log(c1.transaction(500,1))
console.log(c1.transaction(250,0))
console.log(c1.transaction(2500,0))

const c2 = new Customer('SBI122', 'CEO', 2500 )

console.log(c2.getBalance())
console.log(c2.transaction(1000,1))
