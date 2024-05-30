const Ahadal = require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout, 
});    

Ahadal.question("Who are you?\n",(name)=>{
Ahadal.question("how old are u?|n",(age)=>{
    
    
    console.log("hey there "+name+"!");
    console.log("your age is "+age+"!");

    Ahadal.close();

});
});
