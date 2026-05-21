function paris(arr,target){
let final = []


    for(let i = 0; i <arr.length;i++){      //  i = 0 → arr[i] = 1           // i = 1 -> arr[i] = 2
//  j = 1 → 1 + 2 = 3                                                     j = 2 -> 2 + 2 = 4                                                  
// j = 2 → 1 + 3 = 4                                                      j = 3 -> 2 + 3 = 5
// j = 3 → 1 + 4 = 5                                                      j = 4 -> 2 + 4 = 6 -> SAVE[2,4]
// j = 4 → 1 + 5 = 6  → SAVE [1,5]
for(let j = i+1; j < arr.length; j++){

if(arr[i]+arr[j] === target){
       final.push([arr[i],arr[j]])
}


}
    }

    return final;







}





console.log(paris([1,2,5,7,4],6));
