var num=9;
var flag=0;
for(var i=2;i<num;i++){
if(num%i==0){
console.log("not a prime");
flag+=1;
break;
}
else{
    flag=0;
    console.log("prime");
}
}   
if(flag>0){
    console.log(num+"not a prime");
}
else{
    console.log(num+"prime");
}