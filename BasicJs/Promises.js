
// try{
//     validateName(cfvghj,hgfds,yhdfsz)
//     Math.random()*fghjkmjhgfd
// }catch(e){
//     console.log(e)
// }

// console.log("before the loop")
// function bee (){
    // return new Promise(function(resolvedasfghf,rejecthgfghjgf){
    //     let total= 0
    //     for(i=0;i<1000000000;i++){
    //         total+=i
    //     }

    //     if(total<1){
    //         return reject("For LOOP Failed to run")
    //     }else{
    //         return resolve(total)
    //     }
   
    // })
//     let total= 0
//     for(i=0;i<1000000000;i++){
//         total+=i
//     }

//     return "total"
// }
// let answer;
// bee().then(function(data){answer=data}).catch((error)=>{ console.log(err)})

// // const answer //=bee()
// console.log(answer)

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=> console.log(answer=response.status))
// .catch(e=>{})

// const arr = []

const friends = [
    {
        img: "http://localhost:8080/user.jpg",
        username: "user123452676"
    },
    {
        img: "http://localhost:8080/user2.jpg",
        username: "usert34567"
    },
    {
        img: "http://localhost:8080/user3.jpg",
        username: "user123452676"
    }  
]

// friends.forEach((e)=>{
//     document.getElementById("jhgfd").innerHTML+=`<div class="child" id="">
//     <img src="${e.img}" alt="img">
//     ${e.username}</div>`
// })

// {
//     img: "http://localhost:8080/user4.jpg",
//     username: "user123452676"
// }

let arr = []

function promistTest (arg){
    return new Promise((resolve,reject)=>{
        let total = 0

        for(i=0;i<1000000000;i++){
            total+=i
        }
        
        arr.push(arg)

        if(arr.length>0){
            return resolve(arr.length)
        } else{
            return reject("failed to add object to the array")
        }
    })
}

function teo(a){
    console.log(a)
}

function callback(arg){
    let total = 0

        for(i=0;i<1000000000;i++){
            total+=i
        }

    const a =arr.push(arg)
    return a
}

// try {
//     teo(callback("sdfghjk"))
// } catch (e) {
//     console.log("error")
// }

console.log("next")

promistTest("sdfghjkl")
.then(function(e){teo(e)}
)
.catch(function(e){console.log("promise failed")})

promistTest().then().catch()

console.log("after promise")

async function asyncAwait(){

    try {
        const data = await promistTest("asdfghjk")

        teo(data)
    } catch (error) {
        console.log(error)
    }
    
}

console.log("next next")

asyncAwait()