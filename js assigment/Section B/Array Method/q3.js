let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 500,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 1500,
        quantity: 1
    }
];


// let sum = 0;

let total = cart.reduce((sum,cart)=>{
return  sum + (cart.price * cart.quantity);
},0);




console.log(total);
