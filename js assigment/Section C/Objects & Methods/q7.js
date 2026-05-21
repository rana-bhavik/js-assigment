

let usermang = {

    users: [],
    createser: function(id, name, email, age) {
        let user = {
            id: id,
            name: name,
            email: email,
            age: age
        };
        this.users.push(user);
        console.log("User Created");
    },



    
    getUsers: function () {

        console.log("All Users:");
        console.log(this.users);
    },



  
    serchname: function(name) {

        let result = this.users.filter(user =>
            user.name === name
        );

        console.log("Search By Name:");
        console.log(result);
    },



    
    sechemail: function(email) {

        let result = this.users.find((user) =>
            user.email === email
        );

        console.log("search by email:");
        console.log(result);
    },



   
    updat: function (id,updadata) {
        let user = this.users.find(user => user.id === id);
        // if (user) {
        //     Object.assign(user, updatedData);
        //     console.log("User Updated");
        // }
        // else {
        //     console.log("User Not Found");
        // }
        if(!user){
    return "user not found"
        }
        if(updadata.name){
          user.name = updadata.name
        }
        if(updadata.email){
user.email = updadata.email;
        }

        if(updadata.age){
user.age = updadata.age
        }

       return "user update successfully"
    },



    
    delet: function (id) {

        let index = this.users.findIndex(user => user.id === id);

        if (index !== -1) {

            this.users.splice(index, 1);
             //          start form,delet count 
            console.log("User Deleted");
        }
        else {
            console.log("User Not Found");
        }
    }

};





usermang.createser(1, "Bhavik", "bhavik@gmail.com", 20);
usermang.createser(2, "Rana", "rana@gmail.com", 22);
usermang.createser(3, "Amit", "amit@gmail.com", 25);







usermang.getUsers();

usermang.serchname("Bhavik");

usermang.sechemail("rana@gmail.com");







usermang.updat(2, {
    name: "Rana Patel",
    age: 23
});




usermang.getUsers();







usermang.delet(1);







usermang.getUsers();