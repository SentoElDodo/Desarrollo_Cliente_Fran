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

function B(){
    let S=[];
    let num1 = valores.filter(num => typeof(number)=== typeof(num[0]));
   
    for(i=0;i<num1.length;i++){
        if(num1[i]%2==0){
            S.push(num1[i]);
        }
    }
    console.log(S);
}
B();


/* 2 */     

function average(){
    let Ave=0;
    dataArray=[3,7,1,9,3];
    for(i=0;i<dataArray.length;i++){
       Ave=dataArray[i]+Ave;
    }
    let result=Math.round( Ave/dataArray.length);
    
    console.log(result);
}
average();
/* 3 */

function findMinimum(){
    let values=[6,5,8,7,9];
   console.log( Math.min.apply(null, values));

}
findMinimum();

/* 4 */

function findGreaterThan(){
    let M=7;
    let values=[62,45,68,37,8];
    for(i=0;i<values.length;i++){
        if(values[i]>M){
        }else{
            console.log("Falso");
        }
    }

}
findGreaterThan();

/* 5 */         

values=[4,5,6,8,9];
function multipleFactorial(x){
    return x**2;

}
let Mul = values.map(multipleFactorial);
console.log(Mul);

/* 6 */

function gente(){
    let users=["Ignacio","Higinio","Pepe","Jose","Maria","Paco"];
    let blackListed=["Higinio","Jose","Paco"];
    let Pe=[];
    let Pe2=[];
    
    for(i=0;i<blackListed.length;i++){
        for(y=0;y<users.length;y++){
            if(blackListed[i]==users[y]){
                Pe.push(users[y]);
            }
        }
    }


    console.log(Pe);
    

}
gente();