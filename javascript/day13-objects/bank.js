/*
create an object to specify data of customer in a bank. the data to be stored is : account Number, Name, balance.

create a method called as transaction which takes 2 args amount and code (1  for deposite, 0 for withdraw)
create a method the display the current balance for the customer
if the withdrawal amount is more than the balance then display "the balance is insufficient for the specified withdrawal"
*/


const customer ={
    name:'soni',
    accountNumber:'SBI123',
    balance:1000,
    getBalance: function(){
        return this.balance
    },

    tranction:function(amount,code){
        if(code==1){
            this.balance +=amount
            return this.balance
            //this.getBalance()
        }
        else if(code == 0){
            
            if(amount>this.balance){
            return 'the balance is insufficient for specified withdrawal'

        }
        else{
            this.balance-=amount
            return this.balance
        }
    }
    else{
        return 'invalid code'
        } 
}
            }
            
console.log(customer.getBalance())
console.log(customer.tranction(500,1))
console.log(customer.tranction(500,0))
console.log(customer.tranction(2000,0))


