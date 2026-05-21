let newobj = {
name: "Amit",
  department: "Engineering",
  salary: 50000,
  skills: ["HTML", "CSS"],


  getsummry : function(){
    return `hello i am ${this.name} and work in ${this.department} department and my curnt ${this.salary} and my skill is ${this.skills}`;
  },


  getBonus : function (percent){
  return (this.salary * percent)/100;
  },




  addskill : function(skill){
return this.skills.push(skill);
  }






}


console.log(newobj.getBonus(15));
console.log(newobj.addskill("js"));
console.log(newobj.getsummry());
