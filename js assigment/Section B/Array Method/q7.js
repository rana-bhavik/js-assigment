let emp = [
  { name: "A", department: "Engineering", salary: 50000 },
  { name: "B", department: "HR", salary: 40000 },
  { name: "C", department: "Engineering", salary: 70000 },
  { name: "D", department: "Engineering", salary: 60000 }
];



let geteng = emp.filter((ev)=>{
    return ev.department === "Engineering"
});



console.log(geteng);


let totalsala = geteng.reduce((sum,geteng)=>{
return sum + (geteng.salary)
},0);



console.log(totalsala);
