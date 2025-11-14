function signup(userName){
    arr=["seeta","hanuma","rama"]
    if(arr.include(userName)){
        return "User Already Regsistered, Please Login"
    }
    else{
        arr.push(userName)
        return "Signup Sucessfull, Please Login"
    }
}
    