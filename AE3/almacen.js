 function faltaInfo(element){
    const falta = document.getElementById(element);
    falta.textContent = "Introduce los datos";
    falta.classList.add("Error");
}

function remErrorFormat(element){
    const errorP = document.getElementById(element);
    errorP.textContent = "";
    errorP.classList.remove("error");
}

function pag1(){
    const sectionsHTML = document.getElementsByTagName("section");
    const arraySectionsHTML = [...sectionsHTML];
    arraySectionsHTML.forEach(element => element.classList.add("elementHide"));
    pag1.classList.toggle("elementHide");
    atrasB.classList.toggle("elementHide");
    avanzaB.setAttribute("onclick", "validacionToPage2()");
}
 
     function F_Esconder1() {
        let x = document.getElementById("Esconder1");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
 