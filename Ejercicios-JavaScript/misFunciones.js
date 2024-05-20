/**
 * Convierte unidades entre metros,yardas,pies y pulgadas
 * @method convunidades
 * @param {string} ID
 * @param {number} N
 */
function convunidades(ID, N) {
    if (isNaN(N)) {
        alert('El valor ingresado no es un número');
        document.getElementById(ID).value = "";
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    } else if (ID == "metro") {
        document.getElementById("pulgada").value = N * 39.3701;
        document.getElementById("pie").value = N * 3.28084;
        document.getElementById("yarda").value = N * 1.09361;
    } else if (ID == "pie") {
        document.getElementById("pulgada").value = N * 12;
        document.getElementById("metro").value = N * 0.3048;
        document.getElementById("yarda").value = N * 0.333333;
    } else if (ID == "pulgada") {
        document.getElementById("metro").value = N * 0.0254;
        document.getElementById("pie").value = N * 0.0833333;
        document.getElementById("yarda").value = N * 0.0277778;
    } else if (ID == "yarda") {
        document.getElementById("pulgada").value = N * 36;
        document.getElementById("pie").value = N * 3;
        document.getElementById("metro").value = N * 0.9144;
    }
}

function convgr(ID){
    if(ID==grados){}
    let grad = document.getElementById(element "grados").value;
    let rad = grad*Math.PI/180
    let document.getElementById(element "radianes").value = rad
    else {if(ID==radianes){
        let rad = document.getElementById(element "radianes").value;
        let grad = grad*Math.PI/180
        let document.getElementById(element "grados").value = rad 
    }}
}
