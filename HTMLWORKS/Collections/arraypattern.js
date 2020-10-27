var ar=[2,4,3]
var total=0;
for(item of ar){
    total=total+item;
}
var op=[]
for(item of ar){
    var element=total-item;
    op.push(element);
}
console.log(op);