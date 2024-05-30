readline = require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout, 
});
readline.question("enter the base " ,(a)=>{
readline.question("enter the height",(b)=>{

    let s1=parseInt(a);
    let s2=parseInt(b);
    let area=(s1*s2)/2;

    console.log("area of the triangle is=",area);


    readline.close();
});
});


            