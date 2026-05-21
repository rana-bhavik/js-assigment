function tra(num){
    let res = [];
for(let i =0;i<num.length;i++){
     res[i] =[];
for(let j = 0; j<num.length;j++){
res[i][j]=num[j][i]
}
}
return res;
}


console.log(tra([[1,2,3],[4,5,6],[7,8,9]]
    

));
