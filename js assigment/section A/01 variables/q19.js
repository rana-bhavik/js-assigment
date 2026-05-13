function outer(){
   let outerf = "i am a outer function";


   function inner(){
    let inner = "i am inner function ";




    function innmost(){
        let innermost = "i am innermost function ";

console.log(outerf);
console.log(inner);
console.log(innermost);



    }
    innmost();

   }


   inner();
}


outer();