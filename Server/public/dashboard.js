document.getElementById("logout").addEventListener("click", (e)=>{
    fetch("http://localhost:5677/logout")
    .then((res)=>{
        if(res.status==200){
            alert("user now logged ")
            return window.location.href="/login.html"
        }
        alert("operation failed")
    })
    .catch(e=>{alert("500 error code")})
})