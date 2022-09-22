const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
})

const email = document.getElementById("email")
const guest = document.getElementById("guest")
const checkin = document.getElementById("checkin")
const checkout = document.getElementById("checkout")
const mobile = document.getElementById("mobile")

document.getElementById("sub").addEventListener("click", (e)=>{
    e.preventDefault()

    fetch("http://localhost:8001/api/book", {
        method:"POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            checkin: checkin.value,
            checkout: checkout.value,
            mobile: mobile.value,
            guest: guest.value,
            roomno: params.room
        })
    })
    .then((data)=>{
        if(data.status==200){
            alert("Room successfully booked")
            data.json()
            .then((json)=>{
                console.log(json)
            })
            return
        }

        alert("failed request")
    })
    .catch((e)=>alert("server is down"))

})

console.log(params.room)

fetch(`http://localhost:8001/api/room?no=${params.room}`)
.then((data)=>{
    if(data.status==200){
        data.json()
        .then((json)=>{
            document.getElementById("no").innerHTML=json.number
            document.getElementById("type").innerHTML=json.type
            document.getElementById("info").innerHTML=json.info
            document.getElementById("price").innerHTML=json.price
            document.getElementById("ava").innerHTML=json.available
        })
        return
    }
})