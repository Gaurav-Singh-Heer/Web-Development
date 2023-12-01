// BY DECLARING
class Product{                            // BY PRODUCT CLASS
    constructor(itemname){
        console.log('Passed by Furniture ' +itemname)
        this.itemname = itemname;
    }
    getItemName(){
        return this.itemname + " is a Product";
    }
}

class Furniture extends Product{         // BY FURNITURE CLASS
    constructor(itemname){
        super(itemname);               // Super Function call construct of parent class  Here parent class is Product
    }

    getItemName(){
        return this.itemname + " is a Furniture"
    }
}

let pencil=new Product('Pencil',20,2,'P10');
let chair=new Furniture('chair',499,20,'C10');












































// //BY EXPRESSION
// const Product1 = class{                        //Removed Product
//     constructor(itemname,price,discount,productCode){
//         this.itemname = itemname;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getdiscountValue(){
//         return this.discount;
//     }
//     set setdiscountValue(value){
//         this.discount=value;
//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
// // IN console WRITE 
// // chair.discountValue()
//     get discountValue(){
//         return this.discount*this.price/100
//     }
// // IN console WRITE 
// // chair.discountValue                  NO need For ()  As this is not function Now it it getter
// }

// let chair=new Product1('chair',499,20,'C10')
// // IN console WRITE 
// // chair.getdiscountValue

// //AND
// //chair.setdiscountValue=10                                 (10 or any value)                