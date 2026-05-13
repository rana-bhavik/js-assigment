let arr = [1,2,3];

let obg = {
    product : 'mobil',
    price : 50000,
    rate : 4.5
}




let func = function val(){
    console.log("hello world");
    
}




function reference(value){
console.log("value add ", value);
console.log("check the type",typeof value);



console.log("array", arr instanceof Array);
console.log("object", obg instanceof Object);
console.log("function", func instanceof Function);


}

reference(arr);
reference(obg);
reference(func);
