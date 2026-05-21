function fib(n){
if(n === 0 || n === 1){
return n
}
let fib1 = [0,1]
for(let i = 2; i<=n;i++){
   fib1[i] =   fib1[i-1]  + fib1[i-2]
   console.log(fib1[i])
}
return fib1[n]
}


console.log(fib(6));
