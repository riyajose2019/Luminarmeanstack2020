function primeRange(low,upp){
    
    for(i=low;i<=upp;i++){
       var flg=0;

        for(j=2;j<=1;j++){
            if(i%j==0){
                flg+=1;
                break;
            }
        }
        if(flg==0){
            console.log(i);
        }
    }
}
primeRange(3,10)