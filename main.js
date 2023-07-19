function calcularCuota() {
    // Obtener los valores ingresados por el usuario
    let monto = parseFloat(document.getElementById('monto').value);
    let plazo = parseInt(document.getElementById('plazo').value);
    let tasa = parseFloat(document.getElementById('tasa').value);
  
    // Calcular la tasa de interés mensual
    let tasaMensual = tasa / 100 / 12;
  
    // Calcular la cuota mensual
    let cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  
    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = "Cuota mensual: " + cuota.toFixed(2);
  }
  