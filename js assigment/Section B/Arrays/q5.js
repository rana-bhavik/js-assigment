function insertion(a){




    for(let i = 0; i < a.length;i++){
      let cunt = a[i];
      let prv = i-1;





      while(prv >= 0 && a[prv] > cunt){
        a[prv + 1]= a[prv];
        prv--;

      }


      a[prv + 1] = cunt;
    }



    return a;
}

console.log(insertion([5,7,8,9,5,1,2,3,5,8,5,8]));