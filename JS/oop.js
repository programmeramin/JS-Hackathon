const country = {
    name : "Bangladesh",
    capital : "Dhaka",
    population : "1700000000000",
    language :"Bengali"

}

country.flag = "Red and green"


const  account = {
    balance : 0,
    addBalance : function(amount) {
      this.balance += amount
    },

    withBalance: function(amount){
        if(amount > this.balance){
            console.log("Insufficient balance");
            return
            
        }
    },
    getBalance: function(){
        return this.balance;
    }
}


account.addBalance(1000);
account.addBalance(500);
account.withBalance(15400);

console.log(account.getBalance());
