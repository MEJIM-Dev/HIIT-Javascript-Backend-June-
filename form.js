const firstname = document.getElementById("first");
const surname = document.getElementById("surname");
const tel = document.getElementById("dial");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const submitBtn = document.getElementById("btn-sub")
const firstErr = document.getElementById("firstError")
const firstVal = document.getElementById("firstValid")
const lastErr = document.getElementById("lastError")
const lastVal = document.getElementById("lastValid")
const emailErr = document.getElementById("emailError")
const emailVal = document.getElementById("emailValid")
const passErr = document.getElementById("passError")
const passVal = document.getElementById("passValid")
const str = document.getElementById("str")
const conPassErr = document.getElementById("conPassError")
const conPassVal = document.getElementById("conValid")
const telVal = document.getElementById("numValid")
const telErr = document.getElementById("numError")
const dropDown = document.getElementById("drop-down")
const form = document.getElementById("parent")
// const listOfValid = Array.from( document.querySelectorAll(".count"))
const countrycodes = ["+234","+233","+235","+535","+546"]

function validateName(element, valid, error){
    const userinput = element.value

    if(userinput.match(/^[A-Z][A-Za-z]{2,24}$/)) { //^[a-zA-Z][\-a-zA-Z]{2,24}$/
        valid.style.display="block"
         error.style.display="none"
         return true
    }
    
    error.style.display="block"
    valid.style.display="none"
    return false
}


    countrycodes.forEach(function(data, index){
        dropDown.innerHTML+=`<option id=${index} value=${data} > ${data}</option>`
    })


function validateNumber(element, valid, error){
    const userinput = element.value

    if(userinput.match(/^[0-9][0-9]{9}$/)) {
        valid.style.display="block"
         error.style.display="none"
         return true
    }
    
    error.style.display="block"
    valid.style.display="none"
    return false
}

firstname.addEventListener("keyup",(e)=>{
    validateName(firstname, firstVal,firstErr)
})

email.addEventListener("keyup",(e)=>{
    emailValidator(email, emailVal,emailErr)
})

// = - \ . ( ) [ ] ^ $ + ? | / * !  backslash\

function emailValidator (element, valid, error){
    const emailVal = element.value
    if(emailVal.match(/^[A-Za-z0-9_][a-zA-Z]+[A-Za-z0-9_\-\.]*@?[a-zA-Z]{2,10}\.[a-z]{2,10}$/)){  //^([A-Za-z]|[0-9])(\.?_?\-?\+?[A-Za-z])*@[a-z]{5}\.[a-z]{2}
        valid.style.display="block"
        error.style.display="none"
        return true
    }

    error.style.display="block"
    valid.style.display="none"

    return false
}

function passwordValidator(ele, valid, error){
    const pass = ele.value;

    if(!pass.match(/^[\!-~]{8,20}$/)){ 
        error.style.display="block"
        valid.style.display="none"
        error.innerHTML="must be between 8-20 characters"
        // setTimeout(()=>
        //     {error.innerHTML="invalid"},
        //  3000)
        return false
    }

    if(!pass.match(/^[A-Z]/)){
        error.style.display="block"
        valid.style.display="none"
        error.innerHTML="first letter must be uppercase"
        // setTimeout(()=>
        //     {error.innerHTML="invalid"},
        //  3000)
        return false
    }

    if(!pass.match(/[a-z]/)){
        error.style.display="block"
        valid.style.display="none"
        error.innerHTML="must have at least one lowercase character"
        // setTimeout(()=>
        //     {error.innerHTML="invalid"},
        //  3000)
        return false
    }

    if(!pass.match(/[0-9]/)){
        error.style.display="block"
        valid.style.display="none"
        error.innerHTML="must contain a number"
        // setTimeout(()=>
        //     {error.innerHTML="invalid"},
        //  3000)
        return false
    }

    if(!pass.match(/[\!-\/:-@\[-`\{-~]/)){
        error.style.display="block"
        valid.style.display="none"
        error.innerHTML="must contain at least one special character"
        // setTimeout(()=>
        //     {error.innerHTML="invalid"},
        //  3000)
        return false
    }
        valid.style.display="block"
        error.style.display="none"
        return true
    
}

password.addEventListener("keyup",(e)=>{
    passwordValidator(password,passVal,passErr)
})

confirmPassword.addEventListener("keyup", ()=>{
    passwordValidator(confirmPassword,conPassVal,conPassErr)
})

surname.addEventListener("keyup",(e)=>{
    validateName(surname, lastVal,lastErr)
})

function nameValidator() {
    validateName(firstname, firstVal, firstErr)   
}

tel.addEventListener("keyup", (e)=>{
    validateNumber(tel, telVal, telErr)
})

// submitBtn.addEventListener("click",(e)=>{
//     e.preventDefault()

//     console.log(dropDown.value)

//     if(!countrycodes.includes(dropDown.value) ){
//         return alert("Not a valid country code")
//     }

//     if(!validateName(firstname,firstVal,firstErr)) {
//         return alert("Invalid firstname")
//     } 
//     if(!validateName(surname,lastVal,lastErr)) {
//         return alert("Invalid lastname")
//     }
//     if (!validateNumber(tel,telVal,telErr)){
//         return alert("Invalid Phone number")
//     }
//     if(!emailValidator(email,emailVal,emailErr)) {
//         return alert("Invalid Email address")
//     }
//     if (!passwordValidator(password,passVal,passErr)){
//         return alert("Invalid password entered")
//     }
//     if(!passwordValidator(confirmPassword,conPassVal,conPassErr)){
//         return alert("Invalid Confirm password field")
//     }
//     if(password.value!=confirmPassword.value){
//         return alert("Password doesn't match confirm password")
//     }

//     alert("form will be submited now")

//     form.submit()

//     // fetch("")
//     // let name = firstname.value.toLowerCase()
    
//     //    fetch("http://localhost:8080/register", {
//     //     method: "POST",
//     //     body: JSON.stringify({
//     //         "name": firstname.value,
//     //         "password": password.value,
//     //         "tel": tel.value,
//     //         "email": email.value,
//     //         "age": dropDown.value
//     //     }),
//     //     headers: {
//     //         'Content-type': 'application/json; charset=UTF-8'
//     //     }
//     // }).then(res=>{
//     //     if(res.status==200){
//     //         alert("user created successfully")
//     //         // return window.location.href="/dashboard"
//     //     }
//     //     else if(res.status==400){
//     //         alert("Bad request")
//     //     }
//     //     // alert("Invalid credentials")
//     // }).catch(e=>{
//     //     console.log("request failed")
//     // })

//     //submit statement here
//     //names to lowercase
//     //add the country code to the number dropdown.value + tel.value
// })
  
// const header = `<div>
//     <div class="logo"> Logo  </div>
//     <ul class="drop-down">
//         <li>Home</li>
//         <li>About</li>
//     </ul>
// </div>`

// submitBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
//     document.body.innerHTML=header
// })
