const ticketno = document.getElementById("ticketno")

document.getElementById("sub").addEventListener("click",(e)=>{
    e.preventDefault()

    fetch("http://localhost:8001/api/checkout", {
        method: "POST",
        headers: {
            'Content-type': "application/json",
        },
        body: JSON.stringify({
            ticketno: ticketno.value
        })
    })
    .then((data)=>{
        if(data.status==200){
           alert("User checkout successfully")
           window.location.href="/BasicJs/index.html"
            return
        }
        alert("failed")
    })
    .catch((e)=>{
        alert("server down")
    })
})