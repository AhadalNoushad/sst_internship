const readline=require("readline")
.createInterface({
    input:process.stdin,  
    output:process.stdout,
});
readline.question("enter the first number:",(x)=>
readline.question("enetr the seccond number:",(y)=>
{
    const sum= parseInt(x)+parseInt(y);
    var sub=x-y;
    var mult=x*y;
    var div=x/y;
    var mod=x%y;
    console.log("sum is"+sum);
    console.log("difference is "+sub);
    console.log("multiplicartion is "+mult);
    console.log("division is "+div);
    console.log("modulus is "+mod); 
    readline.close();
}
)
); 