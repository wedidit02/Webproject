// Cartigory menu
const menu = document.querySelector('.cartigory-list-menu button');
const cartigoryListWrapper = document.querySelector('.cartigory-list-wrapper');
const home = document.querySelector('.home');
const phone = document.querySelector('.phone');
const computer = document.querySelector('.computer');
const fashion = document.querySelector('.fashion');
const accessorie = document.querySelector('.accessorie');
const housing = document.querySelector('.housing');
const game = document.querySelector('.game');




//var for confirm password
const password = document.querySelector('#password');
const passwordconfirm = document.querySelector('#passwordconfirm');
const signupButton = document.querySelector('.signup-button');

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
menu.addEventListener("click", () =>{
    cartigoryListWrapper.classList.toggle("open");
});


// for the comfirm password
signupButton.addEventListener("click", () =>{
    if(password != passwordconfirm){
        alert ("Password didn't match try again");
        return false
    }
    else if(password == passwordconfirm){
        return true
    }
});

