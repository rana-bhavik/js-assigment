// function check(email){

// if(email.length === ""){
// return "email not to empty"
// }
// //email "" <- total length "abc@gamil.com"


// if(email.includes(" ")){
// return "email not contain space"
// }
// //   email "abc @gmail.com" not valid

// if(!email.includes("@")){
// return "email contain a @"
// }

// // email must be contain "@"    "abc@gmail.com"
//                                                                   //0              // 1  
// let part = email.split("@");     // can divide email into 2 parts "abc"     @    "gamail.com"


// if(part.length !== 2){
//   return "email cannot containe 2 more @ that symboles";
// }


// let use = part[0]
// let dom = part[1]


// if(use.length === 0){
// return "user name is empty"
// }
// if(!use.length > 2){
// return "email contain letter more than 2"
// }

// let dom2 = dom.split(".");   //@gmail.com       @gmail   .     com


// let dom4 = dom2[0]     // @gnmail
// let dom5 = dom2[1]    // .com
// if(dom4.length === 0){
// return "domain name not get"
// }



// if(dom5 > 1 || dom5 < 5){
// return "domain name must be between the 1 to 6";
// }



// let validChars =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._@-";


// for(let i = 0; i < email.length; i++){

//         let ch = email[i];

//         if(!validChars.includes(ch)){
//             return "Invalid character found: " + ch;
//         }
//     }

//     return `valid mail id return ${email}`;
// }


// console.log(check("ab2@gmail.co"))



// function check(email){

    
//     if(email.length === 0){
//         return "email not to empty";
//     }

    
//     if(email.includes(" ")){
//         return "email not contain space";
//     }

    
//     if(!email.includes("@")){
//         return "email must contain @";
//     }


//     let part = email.split("@");

//     if(part.length !== 2){
//         return "email cannot contain more than one @ symbol";
//     }

//     let use = part[0];
//     let dom = part[1];

    
//     if(use.length === 0){
//         return "user name is empty";
//     }

//     if(use.length < 3){
//         return "email username must be at least 3 characters";
//     }

    
//     if(!dom.includes(".")){
//         return "domain must contain .";
//     }

//     let dom2 = dom.split(".");

//     let dom4 = dom2[0]; // gmail
//     let dom5 = dom2[1]; // com

//     if(dom4.length === 0){
//         return "domain name not found";
//     }

    
//     if(dom5.length < 1 || dom5.length > 5){
//         return "domain extension must be between 1 to 5 characters";
//     }

//     let validChars =
//         "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._@-";

//     for(let i = 0; i < email.length; i++){

//         let ch = email[i];

//         if(!validChars.includes(ch)){
//             return "Invalid character found: " + ch;
//         }
//     }

//     return `valid mail id return ${email}`;
// }

// console.log(check("ab2@gmail.co"));





function chek(email){

    if(email.length === 0){
        return "Email cannot be empty";
    }

    if(email.includes(" ")){
        return "Email should not contain spaces";
    }


    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

    if(pattern.test(email)){    // .test()   check the email is corect or not 
        return `vaild ${email}`;
    }else{
        return `invalid ${email}`;
    }
}
console.log(chek("ab2@gmail."));













