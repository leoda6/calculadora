const display=document.querySelectorAll(".display");
const botones=document.querySelectorAll(".btn");

botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        const botonapretado = boton.textContent;
        if(boton.id === "c"){
            display.textContent="0";
            return;
        }
        if(boton.id === "borrar"){
            if(display.textContent.length === 1 || display.textContent === "error"){
                display.textContent = "0";
            }
            else{
                display.textContent=display.textContent.slice(0,-1);
            return;
            }
            }
        if(boton.id==="igual"){
            try{
                display.textContent=eval(display.textContent);
            }catch{
                display.textContent="error";
            }
            display.textContent=eval(display.textContent);
            return;
        }

        if(display.textContent === "0" || display.textContent === "error"){
          display.textContent = botonapretado; 
        }
        else{
            display.textContent += botonapretado;
        }
    })
})
