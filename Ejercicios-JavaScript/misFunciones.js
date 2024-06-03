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
    if (N.includes(",")){
        N = N.replace(",",".")
    }
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

let PasarPagina = () => {
    let unit,cant, urlComb;
    cant = document.getElementById("distancia").value;
    unit = document.getElementsByName("unidades")[0].value;
    urlComb = "segundaWeb.html#" + cant + "#" + unit;
    window.open(urlComb);
}

let CargaPag = () => {
    let cant, unit, urlCompleta;
    urlCompleta = window.location.href;
    urlCompleta = UrlCompleta.split("#");
    cant = urlCompleta[1];
    unit = urlCompleta[2];
    document.getElementById("dist") = cant + " " + unit
}

let PasarPagina1 = () => {
    let cant, unit;
    unit = document.getElementsByName("unidades")[0].value;
    cant = document.getElementById("distancia").value;
    sessionStorage.setItem("cantidad",cant);
    sessionStorage.setItem("unidad",unit);
    window.open("segundaWeb1.html");
}

let CargaPag1 = () => {
    let cant, unit;
    cant = sessionStorage.getItem("cantidad");
    unit = sessionStorage.getItem("unidad");
    document.getElementById("dist").value = cant + " " + unit;
}

function CirculoCuadrado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#feab5a";

    const yMax = canvas.height;
    const xMax = canvas.width;

    const lado = 100;
    const margen = 10;
    ctx.fillRect(margen, yMax-lado-margen, lado, lado);
    ctx.arc(xMax/2,yMax/2, 50, 0 ,2*Math.PI, false);
}

function CargarListenerP() {
    document.getElementById("PaintCanvas").addEventListener(onmousemove ,dibujar());
}
var bandera;
function dibujar(){
    const canvas = document.getElementById("PaintCanvas");
    const ctx = canvas.getContext("2d");

    let posx = event.clientX;
    let posy = event.clientY;

    ctx.fillStyle = "#000000";

    canvas.onmousedown = function (){bandera=true;}
    canvas.onmouseup = function (){bandera=false;}
    if (bandera){
        ctx.fillRect(posx, posy, 5,5);
        ctx.fill;
    }
}

function LimpiarPaint(){
    const canvas = document.getElementById("PaintCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

function dibujar2() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const yMax = canvas.height;
    const xMax = canvas.width;

    ctx.beginPath();
    //Lineas horizontales
    for(var i=20; i<yMax;i=i+20){
        ctx.moveTo(0,i);
        ctx.lineTo(xMax,i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    //lineas verticales
    for(let i=20; i<xMax; i=i+20){
        ctx.moveTo(i,0);
        ctx.lineTo(i,yMax);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.moveTo(0,yMax/2);
    ctx.lineTo(xMax,yMax/2);
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
    ctx.moveTo(xMax/2,0);
    ctx.lineTo(xMax/2,yMax);
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
    ctx.endPath();
}

function Dibujarxy(PsX,Psy) {
    const canvas = document.getElementById("MyCanvas");
    const ctx = canvas.getContext("2");
    canvas.width = canvas.width;
    const img = new Image();
    img.src = "images/auto.png";

    if(PsX<0||psy<0){showDialog()}
    else if(PsX>canvas.width||PsY>canvas.height){showDialog()}
    else{
            img.onload = function(){
                ctx.drawImage(img, PsX, Psy);
            }
        }
}

function showDialog(){
    const dialog = document.getElementById("dialog");
    dialog.showModal();
}

function cerrarDialog(){
    const dialog = document.getElementById("dialog");
    dialog.close;
}