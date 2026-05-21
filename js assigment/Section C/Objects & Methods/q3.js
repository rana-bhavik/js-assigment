function eqal(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  
  if (key1.length !== key2.length){

     return false;

  }
  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}




let boj = {
name : "ravi",
age : 52


}
let boj2 ={
    name : "ravi",
age : 45
}


console.log(eqal(boj,boj2));
