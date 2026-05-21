let a = [90,89,99,75,60,33,23]




let grad = a.map((evl)=>{
    if(evl >= 90 && evl <= 99 ){
     return "grade O"
    }
    else if(evl < 90 && evl > 80){
return "grade A"
    }
    else if(evl < 80 && evl > 70){
return "grade A+"
    }else if(evl < 70 && evl >= 60){
return "grade B"
    }
    else if(evl < 60 && evl > 40){
return "grade c"
    }
    else{
        return "grade D"
    }


    return evl
});

console.log(grad);
