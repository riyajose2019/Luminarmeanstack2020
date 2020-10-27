var number=121;
var n2,cube,sum=0;
while(number>0){
    n2=number%10;
    cube=n2*n2*n2;
    sum=sum+cube;
    number=number/10;
}
console.log("sum result is" + sum);
