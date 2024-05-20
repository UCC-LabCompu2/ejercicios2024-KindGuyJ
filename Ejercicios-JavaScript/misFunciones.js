/**
 * Convierte unidades entre metros,yardas,pies y pulgadas
 * @method convunidades
 * @param {string} ID
 * @param {number} N
 */
function works(){
    alert("I exist to know if misfunciones.js loads but generally to make J suffer")
}

convunidades = (ID, N) => {
    if (N includes
    let metros, pulgadas, yardas, pies
    if (isNaN(N)) {
        alert('El valor ingresado no es un número');
        document.getElementById(ID).value = "";
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
    } else if (ID == "metro") {
        metros = N
        pulgadas = N * 39.3701;
        pies = N * 3.28084;
        yardas = N * 1.09361;
    } else if (ID == "pie") {
        pies = N
        pulgadas = N * 12;
        metros = N * 0.3048;
        yardas = N * 0.333333;
    } else if (ID == "pulgada") {
        pulgadas = N
        metros = N * 0.0254;
        pies = N * 0.0833333;
        yardas = N * 0.0277778;
    } else if (ID == "yarda") {
        yardas = N
        pulgadas = N * 36;
        pies = N * 3;
        metros = N * 0.9144;
    }
    document.getElementById("metro").value = Math.round(metros*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgadas*100)/100;
    document.getElementById("pie").value = Math.round(pies*100)/100;
    document.getElementById("yarda").value = Math.round(yardas*100)/100;
}

function convgr(ID){
    if(ID==grados){
    let grad = document.getElementById("grados").value;
    let rad = grad*Math.PI/180;
    document.getElementById("radianes").value = rad;}
    else if(ID==radianes){
        let rad = document.getElementById("radianes").value;
        let grad = grad*Math.PI/180;
        document.getElementById("grados").value = rad;
    }
}

let HidenS = (valorMD) => {
    if (ValorMD==="val_mostrar"){
        document.getElementById("SoyYo").style.display = "block";
    }else if (ValorMD==="val_ocultar"){
        document.getElementById("SoyYo").style.display = "none";
    }
}

let cs = () => {
    let num1,num2;
    num1 = parseFloat(document.GetElementsByName("sum_num1")[0].value);
    num2 = parseFloat(document.GetElementsByName("sum_num2")[0].value);
    document.GetElementsByName("sum_total")[0].value = num1+num2;
}
