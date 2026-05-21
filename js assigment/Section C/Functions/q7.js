function main(...fns){
return function (value){
    return fns.reduce((acc,fns)=>{
      // acc = 2 so    fns = add(n)
        return fns(acc);
    },value);
}
}


function add(n){
return n+2;
}


function mul(n){
return n*3
}


function squer(n){
return n*n
}


let pipeline = main(add,mul,squer)




console.log(pipeline(2));