var sign_inputs = document.querySelectorAll("input")
var msg = document.querySelector(".success_msg")
var fail_msg = document.querySelector(".fail_msg")
var welcome_msg = document.querySelector(".welcome_msg")
var welcome_name = document.querySelector(".welcome_name")
var log_form = document.querySelector(".log_form")
var nav = document.querySelector("nav");
var account;
if (localStorage.getItem("useracc") != null) {
    account = JSON.parse(localStorage.getItem("useracc"))
} else {
    account = [];
}


function get_accounts() {
    if (Check_signup_vaildate()) {
        alert("email Or passoword repeated")
    } else {
        var account_data = {
            Name: sign_inputs[0].value.toLocaleLowerCase(),
            Email: sign_inputs[1].value.toLocaleLowerCase(),
            Passoword: sign_inputs[2].value,
        }
        account.push(account_data);
        localStorage.setItem("useracc", JSON.stringify(account))
        msg.classList.replace("d-none", "d-block");
        clear_form();
    }
}
function clear_form() {
    sign_inputs[0].value = "";
    sign_inputs[1].value = "";
    sign_inputs[2].value = "";
}


var flag = false;
var index;
function check_acc() {
    if (sign_inputs[0].value != "" && sign_inputs[1].value != "") {
        for (var i = 0; i < account.length; i++) {
            if (account[i].Email.includes(sign_inputs[0].value.toLowerCase()) && account[i].Passoword.includes(sign_inputs[1].value.toLowerCase())) {
                flag = true;
                index = i;
                localStorage.setItem("index", index.toString())
                break;
            }
        }
    }
    return flag;
}

function login_check() {
    if (check_acc()) {
        window.location.href = "./welcome_page.html";
    }
    else {
        fail_msg.classList.replace("d-none", "d-block");
    }
}

function log_out() {
    window.location.href = "./index.html";
}
var index_get = Number(localStorage.getItem('index'));
welcome_msg.innerHTML = `Hello ${account[index_get].Name}`;

var name_check = /[a-z]{3,9}/i;
var sign_flag = false;
function Check_signup_vaildate() {

        for (var i = 0; i < account.length; i++) {
            if (account[i].Email.includes(sign_inputs[0].value.toLowerCase()) || account[i].Passoword.includes(sign_inputs[1].value.toLowerCase())) {
                sign_flag = true;
                break;
            } else{
                sign_flag = false
            }
        } 
   
    return sign_flag;
}
