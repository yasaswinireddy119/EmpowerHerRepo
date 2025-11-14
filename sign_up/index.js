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

function login(userName, password){
    arr=["seeta","hanuma","rama"]
    if(!arr.includes(userName)){
        return "User Not Found, Please Signup"
        
    }
     if (password === "Emp@123") {
        return "Login Sucessfull..."
    } else {
        return "Wrong Password...."
    }
}
}
