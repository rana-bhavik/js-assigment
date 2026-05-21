let pd = {

    name : 'laptop',
    price : 5000,

    get priceq(){
 return this.price;
    },



    set priceq(value){
if(value > 0){
this.price = value
}else {
    console.log("invlaid");
    
}
    }




}




// pd.priceq= 60000
// pd.priceq= 47000
pd.priceq = -125
console.log(pd.priceq);
