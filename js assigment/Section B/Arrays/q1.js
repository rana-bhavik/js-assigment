// let a = [2,3,9,8,1,4,2,]
// let b = [1,8,9,5,2,5,2,]


// let c = a.sort().length + b.sort().length


// console.log(c);




function sort1(a1,a2){


let i = 0;      // for a1
let j =0;// for a2


let result = [];

while(i < a1.length && j <a2.length){
if(a1[i] < a2[j]){
result.push(a1[i])
i++;
}else{
    result.push(a2[j])
    j++;
}


}
 //   this two loop take because when 1st array [1,2,3,6,7,8]    and the 2nd array [4,5]    for that
while(i < a1.length){        
result.push(a1[i])
i++;
}
while(j < a2.length){
result.push(a2[j])
j++;
}





return result;


}



console.log(sort1([1,2,3,6,7,8],[4,5]))
