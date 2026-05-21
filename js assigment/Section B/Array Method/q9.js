let cart = [
  { product: "Laptop", price: 50000, qty: 1, discount: 10 },
  { product: "Mouse", price: 500, qty: 2, discount: 5 },
  { product: "Keyboard", price: 1500, qty: 1, discount: 20 }
];




let finalbill = cart.map((item)=>{
let itemtotal = item.price * item.qty
let dicamt = itemtotal * (item.discount / 100);
let finaldicamt = itemtotal - dicamt;


let gst = finaldicamt * 0.18;
let finbillamt = finaldicamt + gst 


return {
    products : item.product,
    itemtotal,
    dicamt,
    finaldicamt,
    gst,
    finbillamt



}











});
let totlbill = finalbill.reduce((sum,item)=>{return sum + item.finbillamt},0);

console.log(finalbill);
console.log(totlbill);






