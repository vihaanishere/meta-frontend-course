//Object Oriented Programing
//Here the data is stored as group objects and the function is also part of that object
shoes1 = {stock : 120, price: 50, tax: 1.5,
    totalPrice: function(){
        var calc = this.stock * (this.price+this.tax)
        
        return ("Total Price:" + calc)
    }
}
shoes2 = {stock : 150, price: 40, tax: 1,
    totalPrice: function(){
        var calc = this.stock * (this.price+this.tax)
        return ("Total Price:" + calc)

    }
}
console.log(shoes1.totalPrice())
console.log(shoes2.totalPrice())

