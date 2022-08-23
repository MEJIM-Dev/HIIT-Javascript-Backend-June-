const firstname = document.getElementById("username")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const age = document.getElementById("age")
const gender = document.getElementById("gender")
const password = document.getElementById("password")
const submit = document.getElementById("submit")

submit.addEventListener("click",function(e){
    e.preventDefault();
    console.log("firstname:", firstname.value,
                "lastname:", lastname.value,
                "email:",  email.value,
                "password:", password.value,
                "age:", age.value,
                "gender:", gender.value)
    if(firstname.value!="" && lastname.value!="" && email.value!="" && gender.value!="" && age.value!="" && password.value!="" ){
        fetch("http://localhost:8080/register",{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                firstname: firstname.value,
                lastname: lastname.value,
                email  : email.value,
                password: password.value,
                age: age.value,
                gender: gender.value,
            })
        })
        .then((res)=>{
            if(res.status==200){
               return alert("user created successfully")
            }
            alert("Failed to save user")
        })
        .catch((e)=>{
            alert(e)
        })
    }

    return alert("form not completed yet")

})