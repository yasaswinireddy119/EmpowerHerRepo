function prime(num){
    if(num > 2){
        return false
    }
    for(i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

//checking even or odd
let num=0;
if(num%2==0){
    return true
}
else{
    return false
}