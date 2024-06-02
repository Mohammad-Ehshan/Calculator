const buttons  = document.querySelectorAll(".button")
const input = document.querySelector(".input")
let userinput = ""

buttons.forEach((button)=>{
  button.addEventListener("click", function(e) {
    if(e.target.innerHTML == '='){
      try{ outcome = eval(userinput)
     input.value = outcome
     userinput = ""
    } catch(error){
      alert("Error evaluatig expression:")
      userinput = ""
      input.value= userinput
    }
    }
    else if(e.target.innerHTML == 'AC'){
      userinput = ""
      input.value = userinput
    }
    else if(e.target.innerHTML == '%'){
       userinput = eval(userinput) / 100
      input.value = userinput
    }
    else if(e.target.innerHTML == 'X'){
      userinput = userinput.slice(0,-1)
      input.value =  userinput
    }
  
    else{
      userinput = userinput + e.target.innerHTML
      input.value = userinput
    }
  });

})


