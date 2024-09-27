var img = document.getElementById("img1")
console.log(img)
function bulbOn(){
    img.src = "ton-removebg-preview.png"
    var btn = document.getElementById("bttn").disabled = false
}
function bulbOff(){
    img.src = "off-removebg-preview.png"
  
}