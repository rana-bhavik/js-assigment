let sl = [
{name : 'ravi', sala : 500000},
{name : 'suraj', sala : 96000},
{name : 'sun', sala : 84000},
{name : 'prabhat', sala : 65000},
{name : 'morning', sala : 50000},
{name : 'night', sala : 10000}

]







let ab1 = sl.some((ab1)=>{
return ab1.sala > 10000;
});
console.log(ab1);


let ab3 = sl.every(ab3=> ab3.sala > 30000);
console.log(ab3);


