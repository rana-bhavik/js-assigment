function nollishcoll(a,b){
return ((b===0) ? null : a/b) ?? "cannot divide by 0";        // 0 / 0 output become 0 null, so define for null value we can use  "?? "cannot divide by 0""  <- thsi statemant call 
// "nullish coalescing"
}


                     // a  b
console.log(nollishcoll(10,0));   // b === 0 -> 0 === 0 -> null/undefine -> so print ?? "cannot divide by 0"  that condition
console.log(nollishcoll(10,2));    // b === 0 -> 2 === 0 -> a/b -> 10/2 -> 5  so this -> ?? "cannot divide by 0"  that condition not print


