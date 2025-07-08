const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach( (button) =>{
   button.addEventListener("click", (e)=>{
    const color = e.target.id
     switch (color){
     case "grey":
     body.style.backgroundColor = "Grey"
     break
     case "white":
     body.style.backgroundColor = "White"
     break
      case "blue":
     body.style.backgroundColor = "blue"
     break
     case "yellow":
     body.style.backgroundColor = "yellow"
     break
     default:
        body.style.backgroundColor = "white";
     }
   })
}
)

//learn about how to change color in js 
