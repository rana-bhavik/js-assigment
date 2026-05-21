let std = [
  { name: "Amit", marks: [85, 90, 78] },
  { name: "Ravi", marks: [40, 55, 60] },
  { name: "Neha", marks: [95, 92, 98] },
  { name: "John", marks: [30, 25, 40] }
];


let assig = std.map((stu)=>{
let total = stu.marks.reduce((sum,stu)=>{return sum + stu},0);
let avg = total / stu.marks.length

let grad = avg >= 90 ? "grade A" : avg >= 75 ? "grade B" : avg >= 60 ? "grad B" : avg >= 40 ? "grad C" : "not"


return {
    ...stu,
    total,
    avg,
    grad
}
});



console.log(assig);
