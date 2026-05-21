let num = 123;
let sum = 0;
while(num > 0){

let num1 = num % 10;    //123%10 => 3    12/10  = 2   1/10  = 1
sum = sum + num1;     //  0   + 3 = 3    3 + 2 = 5    5 +1 = 6
num = Math.floor(num / 10);  //12   1

// sum = num ;

}
console.log(sum);
