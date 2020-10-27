var ar=[1,2,3,4,5,6,7,11]

var low=0;
var element=6
var upp=ar.length-1 //8-1=7
var flag=0;
while(low<upp) //0<7  4<7
{
    mid=Math.floor((low+upp)/2); //mid=0+7/2=3.5=3
    if (element >ar[mid]){ //6>ar[3] -> 6>4
        low=mid+1; //3+1=4
    }
    else if(element<ar[mid]){ //6<6
        upp=mid-1;
    }
    else if(element==ar[mid]){
        flag=flag+1;
        break;
    }
}
if(flag>0){
    console.log("element found");
}
else{
    console.log("element not found");
}