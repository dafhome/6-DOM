 
// 1- CALCULO PESO IDEAL
// Pides al usuario su altura y peso. Con un botón, hacer que calcule el peso ideal y lo muestre en pantalla, del tipo: para la altura X y el peso Y, tu peso ideal sería: Z .
// Usar inputs para pedir los datos, y divs para mostrar el resultado.
// “Para conocer cuál es tu peso ideal, deberás medir tu altura siempre en metros y tu peso en kilos. Una vez hecho, realiza una operación simple: divide tu peso entre tu altura al cuadrado para obtener el IMC (indice de masa corporal). Si tu IMC es inferior a 18.5, se podría considerar que estás por debajo del peso recomendado.”

function calculoImc (){
    let a = document.getElementById("altura").value;
    let p = document.getElementById("peso").value;
    let imcMax = 24.9;
    
    let imc = p / ((a/100)**2);
    let miPeso = imcMax * ((a/100)**2);

    if (imc<18.5){
        document.getElementById("pesoIdeal").innerHTML = "Según los standares de indice de masa corporal actualmente estas por debajo del peso recomendado. Tu peso ideal sería: <span>"+ miPeso.toFixed(2)+"kg</span>.";
    }
    else if (imc<24.9){
        document.getElementById("pesoIdeal").innerHTML = "Según los standares de indice de masa corporal actualmente estas en un peso normal. Tu peso ideal sería: <span>"+ miPeso.toFixed(2)+"kg</span>.";
    }

    else{
        document.getElementById("pesoIdeal").innerHTML = "Según los varemos standard de indice de masa corporal tu peso ideal sería: <span>"+ miPeso.toFixed(2)+ "kg</span>."
    }
    
}