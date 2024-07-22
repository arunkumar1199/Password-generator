const passwordBox = document.getElementById("Password");
const lenght =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*_+|}{[]<>/-=";

const allchairs = upperCase + lowercase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allchairs[Math.floor(Math.random() * allchairs.length)];
    }
    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
