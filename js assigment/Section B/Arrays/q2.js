function missing(num){

let n = num.length+1;

let exptsum = 0;

for(let i = 1; i <= n; i++){    //num.length = 7
                               //n = 7 + 1 = 8
exptsum += i;    // 0+1 = 1 ,1+2 = 3 , 3+3 = 6 , 6+4=10 ...............extual sum = 36    [1,2,3,4,6,7,8]  this array
                                
}

let acctualsum = 0;
for(let i = 0; i < num.length;i++){     // 0+6 = 7
acctualsum += num[i];
}


let missingnum =  exptsum - acctualsum;






return missingnum;

}

console.log(missing([1,2,3,4,6,7,8]));