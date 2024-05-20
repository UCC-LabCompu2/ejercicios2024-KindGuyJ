/**
 * Convierte unidades entre metros,yardas,pies y pulgadas
 * @method convunidades
 * @param {string} ID
 * @param {number} N
 */
function works(){
    alert("I exist to know if misfunciones.js loads")
}

convunidades = (ID, N) => {
    let metros, pulgadas, yardas, pies
    if (isNaN(N)) {
        alert('El valor ingresado no es un número');
        document.getElementById(ID).value = "";
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
    } else if (ID == "metro") {
        pulgadas = N * 39.3701;
        pies = N * 3.28084;
        yardas = N * 1.09361;
    } else if (ID == "pie") {
        pulgadas = N * 12;
        metros = N * 0.3048;
        yardas = N * 0.333333;
    } else if (ID == "pulgada") {
        metros = N * 0.0254;
        pies = N * 0.0833333;
        yardas = N * 0.0277778;
    } else if (ID == "yarda") {
        pulgadas = N * 36;
        pies = N * 3;
        metros = N * 0.9144;
    }
    document.getElementById("metro").value = metros;
    document.getElementById("pulgada").value = pulgadas;
    document.getElementById("pie").value = pies;
    document.getElementById("yarda").value = yardas;
}

function convgr(ID){
    if(ID==grados){}
    let grad = document.getElementById("grados").value;
    let rad = grad*Math.PI/180;
    document.getElementById("radianes").value = rad;
    else {if(ID==radianes){
        let rad = document.getElementById("radianes").value;
        let grad = grad*Math.PI/180;
        document.getElementById("grados").value = rad;
    }}
}

let HidenS = (valorMD) => {
    if valor(ValorMD==="val_mostrar"){
        document.getElementById("SoyYo").style.display = "block";
    }else if valor(ValorMD==="val_ocultar"){
        document.getElementById("SoyYo").style.display = "none";
    }
} 
