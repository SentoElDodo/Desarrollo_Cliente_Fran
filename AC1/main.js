/* 1.A */
function ejercicio1_A(){
    alert ("Soy el primer script");
}

/* 1.B */
function ejercicio1_B(){
    let alertMessage = "Soy el primer script"; 
    alert(alertMessage);
}

/* 1.C */
function ejercicio1_C(){
    const ALERT_MESSAGE= "Soy el primer script"+ " y estoy funcionando sobre "+ navigator.appVersion; 
    alert (ALERT_MESSAGE); 
}


/* 2.A */
function ejercicio2_A(){
    let meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    meses.forEach(element => { console.log (element) });
}


/* 2.B */
function ejercicio2_B(){
    console.table(meses);
}

/* 3 */
function ejercicio3(){
    const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];
    values.forEach(element => {console.log(typeof element)});
}

/* 4 */
function ejercicio4(){
    var numero1=5;
    var numero2=8;

    if(numero1<numero2){
        console.log("numero1 no es mayor que numero2");
    }

    if(numero2>=0){
        console.log("numero2 es positivo");
    }

    if((numero1!=0) || (numero1<0)){
        console.log("numero1 es negativo o distinto de cero");
    }

    if((numero1+1)<numero2){
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

/* 5 */
function ejercicio5 (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    return total; 
    alert(ejercicio5(15));

}

/* 6 */
function ejercicio6(){
    function pideNum(){
        var n1=parseInt(prompt("Introduce un numero:"));
        return (n1);
    }


    function ParInpar(n1){
        if(n1%2==0){   /* NS COMO PEDIR A LA FUNCION ANTERIOR EL VALOR n1 */ 
            return "Par";
        }else{
            return "Impar";
        }
     /* AHORA ME SACA SIEMPRE IMPAR, PERO CREO Q COGE EL NUMERO ALMENOS */
    }
    n1= 5
    alert(ParInpar(pideNum(n1)));
}

/* 7 */

function ejercicio7(){
    let Ab=parseInt(prompt("Introduce un numero:"));
    console.log(Math.abs(Ab));
}
ejercicio7();

/* 8 */
function ejercicio8(){
    let n8=parseInt(prompt("Introduce un numero:"));
    
    while(n8<=1 && n8>=12){
    alert("Introduce otro numero"); 
    n8=parseInt(prompt("Introduce un numero:"));
    }
}
