var ar=[10,10,20,20,30,31,32];
var count={}
for (num of ar){
    if (num in count){
         count[num]+=1;
    }
    else{
        count[num]=1;
    }
}
console.log(count);