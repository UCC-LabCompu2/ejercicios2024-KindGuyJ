/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convunidades(ID,N){
  if(isNaN(valor)){alerta('El valor ingresado no es un numero');
    document.getElementById("metro").value = "";
    document.getElementById("pulgada").value = "";
    document.getElementById("pie").value = "";
    document.getElementById("yarda").value = "";
    }
  else if (ID=="metro"){
    document.getElementById("pulgada").value = N*39.3701;
    document.getElementById("pie").value = N*3.28084;
    document.getElementById("yarda").value = N*1.09361;
  }
    else if (ID=="pie"){
    document.getElementById("pulgada").value = N*12;
    document.getElementById("metro").value = N*0.3048;
    document.getElementById("yarda").value = N*0.333333;
  }
    else if (ID=="pulgada"){
    document.getElementById("metro").value = N*0.0254;
    document.getElementById("pie").value = N*0.0833333;
    document.getElementById("yarda").value = N*0.0277778;
  }
    else if (ID=="yarda"){
    document.getElementById("pulgada").value = N*36;
    document.getElementById("pie").value = N*3;
    document.getElementById("metro").value = N*0.9144;
  }
}
