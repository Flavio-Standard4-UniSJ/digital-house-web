//alert("viva jesus!");
var password = document.getElementById('senha');
var confirm_password = document.getElementById('confirmar-senha');
var validatePassword = ()=>{
    if(password.value != confirm_password.value){
        confirm_password.setCustomValidity('senhas diferentes');
        confirm_password.reportValidity()
        return true;
    }else{
        confirm_password.setCustomValidity('');
        return false;
    }
}
confirm_password.addEventListener('input', validatePassword);