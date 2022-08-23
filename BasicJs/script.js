// function returnPosSum(aray,total){
//     total=4
//     if(){//two index = total){
//         //console.log(number, number2)
//     } else{
//        // console.log(0)
//     }
// }
// function ac(){
// let breakPoint=-1;

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     if(element=="46"){
//         breakPoint=i;
//         console.log("breaking the loop")
//         break;
//     }
// }


// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//         console.log("main",element)
//     for (let j = 0; j < myArr.length; j++) {
//         const ele = myArr[j];
//         console.log("pos",ele)
//     }
    
// }

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log("running");
//     for (let j = 0; j < 3; j++) {
//         const element = myArr[j];
//         console.log("inner loop")
//     }
// }

console.log("done")
 
// console.log(breakPoint)
// }

// ac()

function abc(){

}
// class Students {

//     constructor(name,contact,course) {
//             this.name = name,
//             this.contact = contact,
//             this.course = course
//     }

//     sayHello(){
//         console.log("Hello from", this.name)
//     }

// }

// class Person{
//     constructor(name,gender,age) {
//         this.name = name,
//         this.age = age
//         this.gender = gender
//     }  
    
//     eat(){
//         console.log("I am eating")
//     }
// }

// class FacebookUser extends Person {
//     constructor(name,gender,age,phone,email,password) {
//         super(name,gender,age)
//         this.password = password
//         this.phone = phone
//         this.email = email
//     } 

//     login(){
//         console.log("User is now logged in")
//     }
// }

// let sandy = new Person("sandy","female",29)
// let user101 = new FacebookUser("Bolu","male",12,09865443692,"Bolu@gmail.com","12345678")
// // user101.login()

// user101.name

// //+=
// let info = 1;
// // info = 2
// info += 3;// info = former + right hand side = 2+2
// info/= 2 // 2/5
// info-= 5  //2-5
// %= 
// *=
// 1=="1"
// a++
// a--
// 1==="1"
// console.log(info)


// class User extends Students {
//     constructor(name,contact,course,email,password){
//         super(name,contact,course)
//         this.email = email
//         this.password = password
//     }

//     login(password){
//         if(this.password==password) return console.log("user now logged in")
//         return console.log("Incorrect password")
//     }
// }

// let colu = new User("Bolu","09865443692","Node","Bolu@gmail.com","12345678")
// colu.login("122e3s")

// let moses = new Students("Moses","08023456789","PHP")
// moses.sayHello()
// let sarah = new Students("Sarah","08023456789","PHP")
// console.log(moses.name)
// let sam = {
//     name: "Sanin",
//     contact: "08023456789",
//     course: "Node Backend",
//     username: "fghghjh",
//     sayHello() {
//         console.log("Hello from ",this.name)
//     }

// }

let dan = {
    name: "Sanin",
    contact: "08023456789",
    course: "Node Backend",
    nothi() {}
}

// console.log(sam)
// sarah.sayHello()
// moses.sayHello()
// sam.sayHello()
// function test(name, info, some){
//     console.log(name,info,some)
// }

// test("s","am","e")

// let myArry = ["a", "d","ghjds","r","gs", "tyhgshad2132454", "h","gtfs"]

// let secondArry = [
//     ["a","b", "g","a","b", "g","a","b", "g"],
//     ["c"]
// ]



// let studentOne = {
//     name: "Sanin",
//     contact: "08023456789",
//     course: "Node Backend"
// }

// let studentTwo = {
//     name: "Kingsley",
//     contact: "08023453534",
//     course: "PHP Backend"
// }

// let studentthree = {
//     name: "name"
// }

// console.log(studentOne.name, studentOne.contact,studentTwo.name, studentOne.contact)

// let students = ["Sanin", "serdtfyghjbv", "Node Backend", "Kingsley", "Node Backend", "09872658373"]
// secondArry.forEach(function(item){
//     item.forEach(function(data){
//         console.log(data)
//     })
// })

// myArry.forEach(function(data,index){
//     if(index==4){
//         console.log("true")
//     }
// })

// function createArr (){
//     return ["a","b","c"]
// }

// let newArr = createArr()

// myArry.forEach((data, index)=>{
//     if(index<3){
//         newArr.push(data)
//     }
// })
// let newArr = myArry.map((data,index)=>{
//     if(index<3){ 
//         return data
//     }
//     // return
//     // return "nothing"
// })

// console.log(newArr)


// for(i=0;i<secondArry.length;i++){
//     for(j=0;j<secondArry[i].length;j++){
//         console.log(secondArry[i][j])
//     }
// }

// for( i=myArry.length-1; i>=0; i--){
//     console.log(myArry[i])
// }

// for(i=0;i<10;i++){
//     // if(counter==10) {
//     //     break
//     // }
//     // if(i==2){
//     //     continue
//     // }
//     console.log(i)
//     // console.log(counter)
// }

// function onClick(arg) {
//     if(arg==="one"){
//         console.log("this function ran")
//         // two(arg)
//         alert("worked")
//     } else{
//         console.log("Value doesn't equal one so i won't execute the function")
//     }  
// }

// function sayMyname(arg){
//     console.log(arg)
// }
// console.log(arg)
// onClick("one")
// sayMyname("dan")


// function arraySom (data, index){
//     console.log(data)

//     //non repeative array
//     if(secondArry.includes(data)){
//         return
//     }
//     secondArry.push(data)
    
//     //Ensures there are no X's in the array
//     // if(data!="x"){
//     //     secondArry.push(data)
//     // }    // if(index != 3) {
//     //     secondArry.push(data)
//     // }
    
// }

// myArry.forEach(function(element, index){
//     arraySom(element, index)
// })

// console.log(secondArry)


// myArry.push("z")

// myArry.pop()
// myArry.pop()
// myArry = []

// let myFunc  = function () {}

// let myFuncTw = () => {}

// function myFuncT () {}

// let x =1234567890

// x>5 ? console.log(true) : x>10 ? console.log("> 10") : console.log("< 10")

// if(!x>5){
    
// }

// if(x>4 && x<8){
//     console.log("x is greater than 4")
// } else if(x>7){
//     console.log("x is greater than 7")
// } else {
//     console.log("x:", x)
// }


// ////
// if(x>4 && x<8){
//     console.log("x is greater than 4")
//     return
// } 

// if(x>7){
//     console.log("x is greater than 7")
//     return
// }

// console.log("x:", x)


// function addUpToTen(arg){
//     let y = 6

//     if(arg>4){
//         return
//     } else{
//         console.log(y+arg)
//     }

    

//     //shouldn't be more than ten
// }

// addUpToTen(4)
// if(x<5){
//     //execute this
//     // console.log("1 is greater than 5")
//     return
// } 



