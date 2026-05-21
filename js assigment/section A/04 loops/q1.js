let count = 0;
let sum = 0;



for(let i = 2; i <= 200; i++ ){
//    if(i % 2 === 0){
// ispriem= false;
//    }


 let ispriem = true;

for(let j = 2; j < i;j++){
if(i % j === 0){
ispriem = false
break;
}
}
   if(ispriem){
  console.log(i);
   count++;
sum += i;
   }
  
}

console.log("this is total count ",count);
console.log("the sum of all prime number",sum);

