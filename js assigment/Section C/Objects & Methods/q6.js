function invertbog(obj){
let rst = {};

Object.entries(obj).forEach(([key,value])=>{
rst[value] = key;
});


return rst
}




let user = {
    name : "amit",
    city : "surat"
}





console.log(invertbog(user));
