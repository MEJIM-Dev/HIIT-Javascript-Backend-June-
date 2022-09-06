const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("sub").addEventListener("click", (e)=>{
    e.preventDefault()
    fetch("http://localhost:5677/login", {
        method:"POST",
        headers:{
            'Content-type': "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })
    .then((res)=>{
        if(res.status==200){
            alert("user logged in succesflly")
            return window.location= "/dashboard.html"
        }
        res.text().then((msg)=>alert(msg))
        
    })
    .catch((e)=>{
        alert("fetch failed")
    })
})