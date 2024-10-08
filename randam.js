const passwordBox=document.getElementById("password");
const length=12;
const uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase= 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const all_char=specialCharacters+numbers+uppercase+lowercase;
function createpassword() {
    let passward="";
    passward+= uppercase[Math.floor(Math.random()* uppercase.length)]
    passward+= lowercase[Math.floor(Math.random()* lowercase.length)]
    passward+= numbers[Math.floor(Math.random()* numbers.length)]
    passward+= specialCharacters[Math.floor(Math.random()* specialCharacters.length)]
       while(length>passward.length){
                      passward+=all_char[Math.floor(Math.random()*all_char.length)]
       }

       passwordBox.value=passward;

      
}
function copypassword() {
    passwordBox.select();
    document.execCommand("copy")
    
}

