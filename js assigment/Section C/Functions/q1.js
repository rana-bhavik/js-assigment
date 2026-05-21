



function fect(n){
    
if(n === 0 || n === 1){
return 1;
}


return n * fect(n-1)
}

console.log(fect(5));
