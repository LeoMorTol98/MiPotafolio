function IntentoContactar(){
    nombre=document.querySelector("form.formcontato__form input[name='nombre']").value;
    correo=document.querySelector("form.formcontato__form input[name='email']").value;
    asunto=document.querySelector("form.formcontato__form input[name='asunto']").value;
    mensaje=document.getElementById("mensagem");
    
    if (nombre==""){
        document.querySelector(".formcontato__botao").setAttribute('background-color','red');    
        document.querySelector("form.formcontato__form input[name='nombre']").setAttribute('border-color','red');
    } else if (correo==""){
        document.querySelector(".formcontato__botao").setAttribute('background-color','red');    
        document.querySelector("form.formcontato__form input[name='email']").setAttribute('border-color','red');
    } else  if (asunto==""){
        document.querySelector(".formcontato__botao").setAttribute('background-color','red');    
        document.querySelector("form.formcontato__form input[name='asunto']").setAttribute('border-color','red'); 
    } else if (mensaje==""){
        document.querySelector(".formcontato__botao").setAttribute('background-color','red');    
        document.getElementById("mensagem").setAttribute('border-color','red'); 
    } else {
        
    }
}