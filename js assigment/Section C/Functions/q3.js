function appy(a,b,fn){
return fn(a,b)
}

function add(a,b){
return (a+b);
}


function mul(a,b){
    return a*b;
}


console.log(appy(10,5,add))
console.log(appy(10,5,mul))