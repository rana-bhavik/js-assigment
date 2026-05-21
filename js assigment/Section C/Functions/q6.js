function curd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}





let st = curd(1);
let sec = st(2)
console.log(sec(3));