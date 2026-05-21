function com(str){
let emp = "";

let count = 1;




for(let i = 0; i < str.length;i++){
if(str[i] === str[i+1]){                           // aabbb
   // a   === a                                             //    01234
count++    // condition become true so count incres by 1  and going 2
}else{

    emp += str[i] + count
            // a     2
    count = 1;
}
}


return emp;
}



console.log(com("aabbb"));