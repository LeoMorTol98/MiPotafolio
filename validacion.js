function ValidarNombre(){
    let nombre=document.getElementById("nomb").value;
    let mensajeEr=document.getElementById("mensajeError");
    if (nombre===""){
        document.getElementById("botonenv").setAttribute('disabled','true');
        mensajeEr.innerHTML='El campo nombre esta vacio'
    } else{
        document.getElementById("botonenv").removeAttribute('disabled');
        mensajeEr.innerHTML=''
    }
}

function ValidarEmail(){
    let email=document.getElementById("emai").value;
    let mensajeEr=document.getElementById("mensajeError");
    if (email===""){
        document.getElementById("botonenv").setAttribute('disabled','true');
        mensajeEr.innerHTML='El campo email esta vacio'
    } else{
        document.getElementById("botonenv").removeAttribute('disabled');
        mensajeEr.innerHTML=''
    }
}

function ValidarAsunto(){
    let asunto=document.getElementById("asunt").value;
    let mensajeEr=document.getElementById("mensajeError");
    if (asunto===""){
        document.getElementById("botonenv").setAttribute('disabled','true');
        mensajeEr.innerHTML='El campo asunto esta vacio'
    } else{
        document.getElementById("botonenv").removeAttribute('disabled');
        mensajeEr.innerHTML=''
    }
}

function ValidarMensaje(){
    let mensaje=document.getElementById("mensagem").value;
    let mensajeEr=document.getElementById("mensajeError");

    if (mensaje===""){
        document.getElementById("botonenv").setAttribute('disabled','true');
        mensajeEr.innerHTML='El campo mensaje esta vacio';
    } else{
        document.getElementById("botonenv").removeAttribute('disabled');
        mensajeEr.innerHTML='';
    }
}

function validaciónBoton(){
    let nombre=document.getElementById("nomb").value;
    let email=document.getElementById("emai").value;
    let asunto=document.getElementById("asunt").value;
    let mensaje=document.getElementById("mensagem").value;
    let mensajeEr=document.getElementById("mensajeError");

    if ((nombre==="")||(email==="")||(asunto==="")||(mensaje==="")){
        document.getElementById("botonenv").setAttribute('disabled','true');
        mensajeEr.innerHTML='Todos los campos deben etar llenos para poder enviar el correo' 
    }
}