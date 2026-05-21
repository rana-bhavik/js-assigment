function leetr(ispali){
let clean = "";


for(let i = 0; i<ispali.length; i++){
let char = ispali[i].toLowerCase();
if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
clean += char;
}
}
let revs = "";

for(let i = clean.length-1; i >=0; i--){
    revs += clean[i];
}

return revs === clean;




}


console.log(leetr("A man a plan a canal Panama"));
