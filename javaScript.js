//search element
function search(s){
    
    if (s.matches){
        
        document.getElementById("search-contaniner").innerHTML ="<span><input type='text' placeholder='Search here'/><button class='search-btn'><i class='fas fa-search'</button></span>"
        document.getElementById("search-inHeader").innerHTML =""
    }else{
        document.getElementById("search-inHeader").innerHTML ="<span><input type='text' placeholder='Search here'/><button class='search-btn'><i class='fas fa-search'</button></span>"
        document.getElementById("search-contaniner").innerHTML =""
        
    }
}

var s = window.matchMedia("(max-width: 700px)")
search(s)
s.addListener(search);
console.log(s);


// for the comfirm password
document.querySelector('signup-button').onclick = function(){
    const password = document.querySelector('#password').value,
        passwordconfirm = document.querySelector('#passwordconfirm').value;
    
    if(password != passwordconfirm){
        alert ("Password didn't match try again");
        return false
    }
    else if(password == passwordconfirm){
        return true
    }
}

