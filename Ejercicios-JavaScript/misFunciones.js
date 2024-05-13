/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convunidades(ID,N):void{
  if(IsNaN(valor)){alerta('El valor ingresado no es un numero');
    document.GetElementById(elemento "metro").value = "";
    document.GetElementById(elemento "pulgada").value = "";
    document.GetElementById(elemento "pie").value = "";
    document.GetElementById(elemento "yarda").value = "";
    }
  else if (ID=="metro"){
    document.GetElementById(elemento "pulgada").value = valor*39.3701;
    document.GetElementById(elemento "pie").value = valor*3.28084;
    document.GetElementById(elemento "yarda").value = valor*1.09361;
  }
    else if (ID=="pie"){
    document.GetElementById(elemento "pulgada").value = valor*12;
    document.GetElementById(elemento "metro").value = valor*0.3048;
    document.GetElementById(elemento "yarda").value = valor*0.333333;
  }
    else if (ID=="pulgada"){
    document.GetElementById(elemento "metro").value = valor*0.0254;
    document.GetElementById(elemento "pie").value = valor*0.0833333;
    document.GetElementById(elemento "yarda").value = valor*0.0277778;
  }
    else if (ID=="yarda"){
    document.GetElementById(elemento "pulgada").value = valor*36;
    document.GetElementById(elemento "pie").value = valor*3;
    document.GetElementById(elemento "metro").value = valor*0.9144;
  }
}
