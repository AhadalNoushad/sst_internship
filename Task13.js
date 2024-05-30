const readline=require("readline")
.createInterface({
    input:process.stdin,  
    output:process.stdout,
});
readline.question("enter the first number:",(num1)=>{
readline.question("enter the first number:",(num2)=>{
    parseInt(num1);    
    parseInt(num2);


   console.log("logical opertor");
   
   
   console.log("Num 1 && Num 2 =",num1 && num2);
   console.log("num 1 || num2 =", num1 || num2);

   readline.close();
});
});

