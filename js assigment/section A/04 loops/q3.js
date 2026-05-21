let num = 121
let reverse = 0;
let orig = num;

while(num > 0){


    let last = num % 10         //1234/10       123.4     so store  remander 4 in -> 'last'       2 loop 123   get 3
    reverse = (reverse * 10)+last //  reverse becom 0 so 0 *10 = 0 + 4   = 4    2.loop of revers store 4 -> 4 *10 + 3 = 43   continue
    num = Math.floor(num /10);    // get num 123
}
console.log(reverse);
if(reverse == orig){
console.log('palidrom number');

}else{
    console.log('not palidrom number');
}

