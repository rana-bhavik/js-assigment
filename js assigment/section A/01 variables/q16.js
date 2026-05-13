function input(one) {
  if (one === "0") {
    

    return false;
  }

  if (Number.isNaN(one)) {
    return false;
  }

  if (one === "") {
    return false;
  }

  if (one === false) {
    

    return false;
  }

  return true;
}

console.log(input(0));
console.log(input(12));
console.log(input('helo'));
console.log(input(1));
