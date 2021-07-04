// Cartigory menu
const menu = document.querySelector('.cartigory-list-menu button, .cartigory-list-title button');
const Close = document.querySelector('.cartigory-list-title button');
const cartigoryListWrapper = document.querySelector('.cartigory-list-wrapper');
const home = document.querySelector('.home');
const phone = document.querySelector('.phone');
const computer = document.querySelector('.computer');
const fashion = document.querySelector('.fashion');
const accessorie = document.querySelector('.accessorie');
const housing = document.querySelector('.housing');
const game = document.querySelector('.game');

//user menu
const userMenu = document.querySelector('.profile-menu');
const userProfile = document.querySelector('.user-profile');

//var for confirm password
var password = document.querySelector('#password');
var passwordconfirm = document.querySelector('#passwordconfirm');
const signupButton = document.querySelector('.signup-button');
try{
    home.addEventListener("click", () =>{
    home.classList.toggle("list")
    });
    phone.addEventListener("click", () =>{
        phone.classList.toggle("list")
    });
    computer.addEventListener("click", () =>{
        computer.classList.toggle("list")
    });
    game.addEventListener("click", () =>{
        game.classList.toggle("list")
    });
    accessorie.addEventListener("click", () =>{
        accessorie.classList.toggle("list")
    });
    fashion.addEventListener("click", () =>{
        fashion.classList.toggle("list")
    });
    housing.addEventListener("click", () =>{
        housing.classList.toggle("list")
    });
    function openClose() {
        cartigoryListWrapper.classList.toggle("open");
    }
    menu.addEventListener("click", openClose);
    Close.addEventListener("click", openClose);
}catch(e){
}

//user menu
try{
    userProfile.addEventListener("click", () =>{
        userMenu.classList.toggle("user-menu")
    });
}catch(e){
}

// for the comfirm password
try{
    signupButton.addEventListener("click", () =>{
    var name = document.querySelector('.Name').value
    var email = document.querySelector('.Email').value;
    if(name = ''){
        return false  
    }else if(email = ''){
        return false
    }else if(password.value != passwordconfirm.value){
        alert ("Password didn't match try again");
        return false
    }else if(password == passwordconfirm){
        return true
    }
});
}catch(e){
}


