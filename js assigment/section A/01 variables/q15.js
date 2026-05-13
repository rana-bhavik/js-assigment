// Q15. Demonstrate the difference between pass-by-value (primitives) and pass-by-reference (objects/arrays)
// with examples.




// pass by primitive

let a = 10;
let b  = a;

b = 20;


console.log(a);
console.log(b);



// pass by object

let name = {

name : 'prashant'

}


let newnam = name;


// newnam = "Acharya";


console.log(newnam);
console.log(name);





let one = ["hello",12,'23',{name : 'hello',mob : 123456789},NaN]
let two = one;


console.log(two[3].name);


