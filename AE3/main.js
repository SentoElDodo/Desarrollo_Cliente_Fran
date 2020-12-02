 document.addEventListener( "DOMContentLoaded", () => {
    const B1 = document.getElementById("B1");
    const B2 = document.getElementById("B2"); 
    const Esconder1 = document.getElementById("Esconder1");
    const Esconder2 = document.getElementById("Esconder2");
    const pag3 = document.getElementById("Esconder3");
    const pag4 = document.getElementById("pag4");
    const url = document.getElementById("url");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");
})  

function Primera_pagina(){
    Esconder1.style.display = "block";
    Esconder2.style.display = "none";
    B1.style.display= "block";
    B2.style.display= "none";
    document.getElementById("Esconder1").reset();
    
}

 

function F_Esconder2() {
    /* let x = document.getElementById("Esconder1"); */
    
    if(document.getElementById("url").value == ""){
        URL_Escondida.style.display ="block";
    }else{
        const url = document.getElementById("url").value;
        if (Esconder1.style.display === "none") {
            Esconder1.style.display = "block";
        } else {
            Esconder1.style.display = "none";
        }

        B1.style.display = "none";
        B2.style.display = "block";
        A1.style.display = "block";
        Esconder2.style.display = "block";
        
        
    }
}




function F_Esconder3(){  
    B3.style.display = "block";
    if((document.getElementById("name").value == "")){
        p1.style.display = "block";
    }else{
        p1.style.display = "none";
        const name = document.getElementById("name").value;
    }if((document.getElementById("fecha").value == "")){
        p2.style.display = "block";
    }else{
        p2.style.display = "none";
        const fecha = document.getElementById("fecha").value;
    }if((document.getElementById("direccion").value == "")){    
    }else{
        const direccion = document.getElementById("direccion").value;   
    }if((document.getElementById("cp").value == "")){
        p3.style.display = "block";
    }else{
        p3.style.display = "none";
        const cp = document.getElementById("cp").value;
    }if((document.getElementById("pro").value == "")){
        p4.style.display = "block";
    }else{
        p4.style.display = "none";
        const pro = document.getElementById("pro").value; 
    }if((document.getElementById("municipio").value == "")){
        p5.style.display = "block";
    }else{
        p5.style.display = "none";
        const municipio = document.getElementById("municipio").value;
    }

}

function Pasar_Pagina_Con_Los_Datos(){
    /* const Enseña_Nombre = document.getElementById("Enseña_nombre");
    name.innerHTML = Enseña_Fecha; 
    document.getElementById("Enseña_nombre").innerHTML;
    name.innerHTML = name; */
    /* document.textContent.innerHTML= name; */

    
    /* document.getElementById("Enseña_Nombre").replace('&Nombre;', name); */

    /* const Enseña_Nombre = document.createTextNode('Nombre y apellidos: '); 
    document.body.appendChild(Enseña_Nombre); 
    document.createElement('p'); name.textContent = name;         
    document.body.appendChild(name);
    document.getElementById("").textContent=name; */

    /* const Enseña_Fecha = document.createTextNode('Fecha: '); 
    document.body.appendChild(Enseña_Fecha); 
    document.createElement('p'); fecha.textContent = fecha;         
    document.body.appendChild(fecha);
    document.getElementById("").textContent=name; */
    Esconder2.style.display= "none";
    Enseñar_resultado.style.display= "block";
    B2.style.display= "none";
}


