document.getElementById("startBtn").addEventListener("click", function(){
    console.log("test")
    this.style.backgroundColor = generateRandomRGB()
    
    setInterval( function() {
        
        document.getElementById("bg").style.backgroundColor = generateRandomRGB()
    }, 2000);
    
})



function generateRandomNumber(){
    return Math.random()*255
}
function generateRandomRGB(){ 

    var randomR = generateRandomNumber()
    var randomG = generateRandomNumber()
    var randomB = generateRandomNumber()
    return `rgb(${randomR}, ${randomG}, ${randomB})`
}
