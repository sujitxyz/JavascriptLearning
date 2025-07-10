const start =  document.getElementById("start")
const stop =  document.getElementById("stop")
let startGenerating
//to generate random color
const randomColor = ()=>{
  const hex = "0123456789ABCDEF"
let color = "#"

for(let i =0; i<6; i++){
     color += hex[Math.floor(Math.random() * 16)]
}
return color
}
const body = document.querySelector('body')

start.addEventListener("click", (e)=>{
  if(!startGenerating){
 startGenerating = setInterval(function(){
   body.style.backgroundColor = randomColor()
  }, 2000)
}
})
stop.addEventListener("click", ()=>{
  clearInterval(startGenerating)
  console.log("stopped")
  startGenerating = null

})