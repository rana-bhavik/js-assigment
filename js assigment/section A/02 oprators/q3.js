function divid(num){
if(num % 3 === 0 && num % 5 === 0){
console.log(num ,"divide by both 3 and 5");
}else if(num % 3 === 0){
console.log(num ,"divide by only 3");
}else if(num % 5 === 0){
console.log(num ,"divide by only 5");
}else{
  console.log(num ,"this number not devide by any number");  
}
return num
}


console.log(divid(15));