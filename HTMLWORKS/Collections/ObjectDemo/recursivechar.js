var pattern="ABABABC";
 var obj={}
 for (char of pattern)
 {
    if(char in obj){

             console.log("First recursive character is" + char)
             break;
    } 
    else{
        obj[char]=1;
    }
 }
 console.log(obj);