// let a = 0;
// let b = 1;

// for(let i = 0; i <= 20; i++){
   
//      let new1 = a+b;
//       console.log(new1);
//      a = b;
//      b = new1;
// }




let a = 0;
let b = 1;
let newval = '';
for(let i = 0; i < 20;i++){

    newval += a +""  ;   // a = 0 so store newval = 0


    let temp = a+b;      // in fist loop store 0 +1 = 1  and store in newval    after run second loop a becoms to 1  so  1+1  = 2
    a = b;
    b = temp;
}
console.log(newval);
