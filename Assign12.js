readline = require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout, 
});

readline.question("enter the temprature in celsius: ",(a)=>{
    let cel=parseFloat(a);

    let fah=cel*9/5+32;

    console.log("fahreinheit is ",fah);
    readline.close();

});