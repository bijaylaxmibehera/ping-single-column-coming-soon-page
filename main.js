const form=document.querySelector("form");
const submitBtn=document.querySelector("button");
const errorMessage=document.querySelector(".error-msg")


function showMessage(msg) {
    errorMessage.innerText=msg;
    
}

function hideMessage() {
    errorMessage.style.display="none"
}

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function checkEmail(e) {
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;
    if(!validateEmail(email)){
        showMessage("Please provide a valid email address");
        form.classList.add("error");
        errorMessage.style.display="block"
    } else{
        form.classList.remove("error");
        hideMessage();
    }
}


form.addEventListener("submit",checkEmail)