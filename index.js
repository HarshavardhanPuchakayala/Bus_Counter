
let count = 0
let noBuses = document.getElementById("root")
let store= document.getElementById("saves")
function start(){
     count +=1
     noBuses.innerText=count
     
}
function save(){
    let counts=count + " -"
    store.innerHTML += counts
    noBuses.innerHTML = 0
    count = 0

}