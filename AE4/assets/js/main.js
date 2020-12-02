let InfoMeses=[1,2,3,4,5,6,7,8,9,10,11,12];
let InfoTemperatura=[3,4,3,5,7,10,12,15,12,10,7,5];
let InfoLluvia=[40,60,110,70,20,15,10,15,90,120,80,50];

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
            {
                label: 'mm3',
                type: 'line',
                data: InfoLluvia
            },
            {
                label: 'ºC',
                backgroundColor: 'rgb(89, 35, 250)',
                borderColor: 'rgb(20, 81, 166)',
                data: InfoTemperatura
            }
        ],
        labels: InfoMeses,    
    },
});

function ValidaInfo(){
    let meses=document.getElementById("meses").value;
    let temperatura=document.getElementById("temperatura").value;
    let lluvia=document.getElementById("lluvia").value;
    let MesesAlmacen=meses.split(",");
    let TemperaturaAlmacen=temperatura.split(",");
    let LluviaAlmacen=lluvia.split(",");

    if(meses == "" && temperatura == "" && lluvia == ""){
        alert("Debes introducir los datos");
    }else if(meses.lenght == temperatura.lenght && meses.lenght == lluvia.lenght){
        alert("Datos validos");
        MesesAlmacen.forEach((element, index)=> {
            InfoLluvia[element - 1] = LluviaAlmacen[index];
            InfoTemperatura[element - 1] = TemperaturaAlmacen[index];
        });
        chart.update();
    }else{
        alert("Introduce campos");
    }
}

