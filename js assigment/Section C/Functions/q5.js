function multi(n){
return function (num){
return num * n;
}
}


let dub = multi(2)
let mul = multi(5)

console.log(dub(5));
console.log(mul(5));