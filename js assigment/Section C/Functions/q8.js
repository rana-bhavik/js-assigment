function counter(){
    let count = 0;
   return {
     icriment : function(){
count++;
return count;
    },


    decriment : function(){
count--;
return count
    },

    reset : function(){
        count = 0;
        return count
    },
   
    getvalue : function(){
        return count
    }





   }
}

let couts = counter();

console.log(couts.getvalue());
console.log(couts.icriment());
console.log(couts.icriment());
console.log(couts.reset());

