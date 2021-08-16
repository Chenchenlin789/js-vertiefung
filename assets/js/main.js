
//   <!-- Level 2_1 -->
let home=document.getElementById("navHome")

function change() {
    console.log("test")
   home.style.backgroundColor="pink";
   home.style.transform="scaleX(-1)"
}

//   <!-- Level 2_2 -->
function collect() {
    console.log("test")
    let name=document.getElementById("vorname").value
    let lastname=document.getElementById("nachname").value
    let country=document.getElementById("land").value
    console.log(name + " " +lastname + " " + country)
}

 /* <!-- Level 2_10 --> */
function small() {
    let one= document.getElementById("element")
    one.classList.add("small")
    one.classList.remove("big")
    one.classList.remove("middle")
}

function middle() {
    let one= document.getElementById("element")
    one.classList.add("middle")
    one.classList.remove("small")
    one.classList.remove("big")
}

function big() {
    let one= document.getElementById("element")
    one.classList.add("big")
    one.classList.remove("small")
    one.classList.remove("middle")
}