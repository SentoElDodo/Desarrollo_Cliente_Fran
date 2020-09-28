let valores=["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10]; 

/* 1.A */
function A(){
    
    /* valores.forEach(element => console.log(typeof(element))); */

    /* let A=valores.slice(element => console.log(typeof(element))); */
    let num1 = valores.filter(num => typeof(num)=== typeof(num[1])); 
   /*  Coge los valores recorriendo la array y si es igual a tipo string (===) te los coloca en la nueva array creada, y tiene q ser como el valor 1 de "valores" como esta indicado arriba */
   console.log(num1);
}
A(); 

/* 1.B */
