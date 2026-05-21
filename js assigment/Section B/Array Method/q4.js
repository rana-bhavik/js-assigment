let pd = [
    { name: "Laptop", price: 600, stock: 5 },
    { name: "Mouse", price: 300, stock: 10 },
    { name: "Keyboard", price: 800, stock: 0 },
    { name: "Phone", price: 1200, stock: 3 },
    { name: "charger", price: 1000, stock: 450 },
    { name: "handports", price: 12000, stock: 0 },
    { name: "mac mouse", price: 3000, stock: 3 },
    { name: "handspree", price: 400, stock: 122 },
    { name: "Phone", price: null, stock: 3 },
    { name: "Phone", price: 1200, stock: 3 }

];




let newp = pd.find((pd)=>(pd.stock > 5));
console.log(newp);

let newp1 = pd.findIndex((pd)=>(pd.stock > 5));
console.log(newp1);