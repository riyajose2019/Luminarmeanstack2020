var data="hello hai hello hai hai hai hai hello hello";
var word=data.split(" "); //spliting data using space
console.log(word);
var obj={}
for (word of word){
    if (word in obj){
    obj[word]+=1;
    }
    else{
        obj[word]=1;
    }
}
console.log(obj);
 
//Highest occurence
//******************* 


//var word=data.split(" ");
//var obj={}
//for (word of word){
  //  if (word in obj){
    //    console.log("highest occurence word is " + word)
      //  break;  
    //}
    //else{
      //  obj[word]=1;
    //}
//}
//console.log(obj);

var arr=[]
for(key in obj){
  var num=obj[key]
  arr.push(num)
}
 var srt=arr.sort((a,b)=>b-a)
 var elem=srt[0]
 for (key in obj){
   if(elem==obj[key]){
     console.log(key)
   }
 }