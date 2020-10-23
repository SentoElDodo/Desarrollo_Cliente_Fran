/*Ac1*/
/* document.title="Ahora trabajando con DOM dinámico"; */


/*Ac2*/
/* const sections= document.getElementsByTagName('section'); */
/*Lo convierte en un array */
/* [...sections].forEach((section,index)=> section.id='section-'+ index);
console.debug(sections); */

/*Ac3*/
/* const paragraphs = document.getElementsByTagName('p');
[...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem'); */

/* Ac4 */
/* const hipervin= document.getElementsByTagName('a');
[...hipervin].forEach(hipervin => hipervin.style.color = 'White'); */

/* Ac5 */

function A5() { 
    const myDiv = document.getElementById("myDiv"); 
    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox"; 
    checkbox.name = "name"; 
    checkbox.value = "value"; 
    checkbox.id = "id"; 
    var label = document.createElement('label'); 
    label.htmlFor = "id"; 
    label.appendChild(document.createTextNode('This is the label for checkbox.'));  
    myDiv.appendChild(checkbox); 
    myDiv.appendChild(label); 
}
