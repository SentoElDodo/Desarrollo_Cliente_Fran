const axios= require('axios');
document.addEventListener(('DOMContentLoaded'), () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=> {
        let i= 1;

        response.data.forEach(name => {
            let usuario=document.createElement('div');
            document.body.appendChild(usuario);
            usuario.id= i++;

            let id= document.createElement('p');
            id.textContent='Id:  ' + (name.id);
            usuario.appendChild(id);

            let nombre= document.createElement('p');
            nombre.textContent='Nombre:  ' + (name.name);
            usuario.appendChild(nombre);

            let user= document.createElement('p');
            user.textContent='Nombre de usuario:  ' + (name.username);
            usuario.appendChild(user);

            let gmail= document.createElement('p');
            gmail.textContent='Gmail:  ' + (name.email);
            usuario.appendChild(gmail);

            let telf= document.createElement('p');
            telf.textContent='Teléfono:  ' + (name.phone);
            usuario.appendChild(telf);

            let web= document.createElement('p');
            id.textContent='Web:  ' + (name.website);
            usuario.appendChild(web);

            let img= document.createElement('p');
            img.src='../img/'+ usuario.id+ '.jpeg';
            usuario.appendChild(img);

            let boton= document.createElement('button');
            usuario.appendChild(boton);
            boton.appendChild(document.createTextNode('borrar'));
            boton.addEventListener('click', () => {
            document.body.removeChild(document.getElementById(usuario.id));
            });

            usuario.appendChild(boton);
        });
    })

})

let UsuLogin = document.getElementById(UsuLogin);
    let ContraLogin= document.getElementById(ContraLogin);
    /* const Div = document.getElementById("Div"); */
    

function LoginUsu() {
    
    login.style.display= "none";
    Div.style.display= "block";
    p.style.display="block";
} 