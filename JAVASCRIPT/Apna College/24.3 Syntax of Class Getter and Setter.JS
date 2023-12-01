// BY DECLARING
class Product{
    constructor(itemname,price,discount,productCode){
        this.itemname = itemname;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let pencil=new Product('Pencil',20,2,'P10');

// IN console WRITE 
// pencil


//BY EXPRESSION
const Product1 = class{                        //Removed Product
    constructor(itemname,price,discount,productCode){
        this.itemname = itemname;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    get getdiscountValue(){
        return this.discount;
    }
    set setdiscountValue(value){
        this.discount=value;
    }
}

let chair=new Product1('chair',499,20,'C10')
// IN console WRITE 
// chair.getdiscountValue

//AND
//chair.setdiscountValue=10                                 (10 or any value)                                  
