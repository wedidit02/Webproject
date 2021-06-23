// for the comfirm password
document.querySelector('.signup-button').onclick = function(){
    var password = document.querySelector('#password').value,
        passwordconfirm = document.querySelector('#passwordconfirm').value;
    
    if(password != passwordconfirm){
        alert ("Password didn't match try again");
        return false
    }
    else if(password == passwordconfirm){
        return true
    }
}