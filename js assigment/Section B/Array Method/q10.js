let emp = [
  { name: "Amit", salary: 90000, department: "IT" },
  { name: "Ravi", salary: 50000, department: "HR" },
  { name: "Neha", salary: 75000, department: "Finance" },
  { name: "John", salary: 30000, department: "IT" },
  { name: "Sara", salary: 60000, department: "Marketing" }
];



let getem = emp.filter((evl)=>{
return evl.salary >= 40000 && evl.salary <= 80000
}).sort((a,b)=>a.salary - b.salary).map((fin)=>{
return {
    name : fin.name,
    salary : fin.salary,
    department : fin.department
}
});


console.log(getem);



