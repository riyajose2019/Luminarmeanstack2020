function Factorial(num){
    var res=1;
    for(var i=1;i<=num;i++){
        res=res*i;
    }
    console.log("Factorial is" +res);
}
Factorial(5)