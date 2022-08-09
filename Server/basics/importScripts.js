const otherScript = require("./import")
console.log(otherScript.mYfunction())




















// const {myFunction, obj} = require("./import")
// const personalModule = require("./import")
// const fs = require("fs")

// fs.writeFileSync("./new.txt","sedrgyhujkljhgfd")
// fs.writeFile("./new.txt","sedrgyhujkljhgfd",(err)=>{
//     if(err) {
//         console.log("failed to write")
//     } else{
//         console.log("File written successfully")
//     } 
// })

// function skipOddNumbers(arg){
//     let answer = []

//     arg.forEach((data,index)=>{
//         if(index%2!==0){

//         } else{
//             answer.push(data)
//         } 
//     })
//     // for (let i = 0; i < arg.length; i++) {
//     //     const element = arg[i];
//     //     if(i%2!==0){

//     //     } else{
//     //         answer.push(element)
//     //     }        
//     // }
//     console.log(answer)
//     return answer
// }

// const tim = skipOddNumbers(["ab","ac","ad","sc", "hgthui"])
// console.log(tim)
// const fs = require("fs")

// fs.writeFileSync("./sat.txt", "kjhyrdsa")
// const data =fs.readFileSync("./new.json",{encoding:"utf-8"})
// console.log(data)   
// fs.appendFileSync("./sat.txt", "\n kjhyrdsa")

// try {
//     const dataFromSync = fs.readFileSync("./new.txt")

//     console.log("File read successfully")
//     console.log(dataFromSync.toString())
// } catch (error) {
//     console.log("failed to read")
// }

// fs.writeFile("./new.json",JSON.stringify(obj,null,2),(err)=>{
//     if(err){
//         console.log("failed to writ file")
//     } else{
//         console.log("successful")
//     }
// })

// fs.writeFile("./new.js","function test() { console.log() } \n module.exports = test;",(err)=>{
//     if(err){
//         console.log("failed to writ file")
//     } else{
//         console.log("successful")
//     }
// })

const rp = "./new.js"

// function insertFunction(path,data){
//     if(fs.existsSync(path)){
//         const oldData = fs.readFileSync(path, {encoding:"utf-8"})
        
//         const oldObj = JSON.parse(oldData)

//         oldObj.push(data)
//         oldObj.forEach(e => {
//             console.log(e)
//         });
        
//         fs.writeFile(path, JSON.stringify(oldObj,null,2), (err)=>{
//             if(err){
//                 console.log("failed")
//             } else{
//                 console.log("File updated")
//             }
//         })
        
//     }else{

//         fs.writeFile(path, JSON.stringify([data],null,2), (err)=>{
//             if(err){
//                 console.log("failed")
//             } else{
//                 console.log("File created")
//             }
//         })
//     }
// }

// insertFunction("./a.json",obj)

// if(!fs.existsSync("./new.js")){
//     fs.writeFile("./new.js","function test() { console.log() } \n module.exports = test;",(err)=>{
//         if(err){
//             console.log("failed to writ file")
//         } else{
//             console.log("successful")
//         }
//     })
// }else{
//     fs.appendFile("./new.js","\n function test2() { console.log() } \n module.exports = test;",(err)=>{
//         console.log("done")
//     })
// }



// fs.readFile("./new.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log("failed to read")
//     } else{
//         console.log("File read successfully")
//         console.log("data:", data)

//         fs.writeFile("./second.txt", data, (err)=>{
//             if(err){
//                 console.log("failed to write to file")
//             } else{
//                 console.log("done")
//             }
//         })
//     } 
// })

// const importFunction = require("./import")

// const objRecieved = importFunction.obj;

// console.log("node at work")












// const myFunction = importFunction.mYfunction;

//const fs = require("fs")

// fs.writeFileSync("./data.txt","sdfghjkljhgfd")

// importFunction.dfghjkl
// importFunction.exportVar;
// console.log(importFunction)
// importFunction.mYfunction()
// myFunction()

// const obj = {
//     name: "sdfghjkl;'",
//     title: "fdghjkl;",
//     page: "4567890"
// }
