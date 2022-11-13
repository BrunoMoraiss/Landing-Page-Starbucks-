let glass1 = document.getElementById("glass1")
glass1.addEventListener("click", function(){
    document.getElementById("starbucks").src = "images/img1.png"
    document.querySelector('.circle').style.background = "#017143"
})

let glass2 = document.getElementById("glass2")
glass2.addEventListener("click", function(){
    document.getElementById("starbucks").src = "images/img2.png"
    document.querySelector('.circle').style.background = "#eb7495"
})

let glass3 = document.getElementById("glass3")
glass3.addEventListener("click", function(){
    document.getElementById("starbucks").src = "images/img3.png"
    document.querySelector('.circle').style.background = "#d752b1"
})