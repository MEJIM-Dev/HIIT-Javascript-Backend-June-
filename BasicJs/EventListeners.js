document.addEventListener("click", function(e){
    console.log("document was clicked")
})

document.getElementById("parent").addEventListener("click", function(e) {
    e.stopPropagation()
    alert("Please fill only valid information on this form")
    console.log("parent was clicked")
})

document.getElementById("child").addEventListener("click", function(e) {
    e.stopPropagation()
    alert("Please type in only strings as your first name")
    console.log("child was clicked")
})

// document.addEventListener("click", function(e){
//     console.log("Capture phase document was clicked ")
// }, {capture:true})

// document.getElementById("parent").addEventListener("click", function(e) {
//     console.log("Capture phase parent was clicked")
// }, {capture:true})

// document.getElementById("child").addEventListener("click", function(e) {
//     console.log("Capture phase child was clicked")
// }, {capture:true})