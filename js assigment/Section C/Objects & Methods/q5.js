let Taskm = {
  tasks: [],
  idcounter : 1,

  
  addTask: function (title, priority, deadline) {
    let task = {
      id: this.idcounter++,
      title,
      status: "todo", // default status
      priority,      
      deadline
    };

    this.tasks.push(task);
    return "Task added successfully";
  },

  updateTask: function (id, updates) {
    let task = this.tasks.find(t => t.id === id);

    if (!task) return "Task not found";

    if (updates.status) task.status = updates.status;
    if (updates.priority) task.priority = updates.priority;
    if (updates.title) task.title = updates.title;
    if (updates.deadline) task.deadline = updates.deadline;

    return "Task updated successfully";
  },


  deleteTask: function (id) {
    let index = this.tasks.findIndex(t => t.id === id);

    if (index === -1) return "Task not found";

    this.tasks.splice(index, 1);
    return "Task deleted successfully";
  },

  filterByStatus: function (status) {
    return this.tasks.filter(t => t.status === status);
  },


  filterByPriority: function (priority) {
    return this.tasks.filter(t => t.priority === priority);
  }
};







console.log(Taskm.addTask("Learn JS", "high", "2026-05-20"));
console.log(Taskm.addTask("Practice coding", "medium", "2026-05-22"));
console.log(Taskm.addTask("Watch tutorial", "low", "2026-05-25"));
console.log(Taskm.updateTask(3,"watch movie","low","2026-05-25"));


console.log(Taskm.tasks);



