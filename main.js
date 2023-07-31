function calcularCuotas() {
  let monto = parseFloat(document.getElementById('monto').value);
  let plazo = parseInt(document.getElementById('plazo').value);
  let tasa = parseFloat(document.getElementById('tasa').value);

  let tasaMensual = tasa / 100 / 12;

  // Calcular la cuota mensual utilizando la fórmula de cuota fija
  let cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));

  // Mostrar el resultado de la primera cuota
  let resultado = "Cuota 1: " + cuota.toFixed(2) + "<br>";

  // Calcular los pagos mensuales y mostrar el saldo pendiente
  let saldoPendiente = monto;
  for (let i = 2; i <= plazo; i++) {
    saldoPendiente -= cuota;
    resultado += "Cuota " + i + ": " + cuota.toFixed(2) + " - Saldo Pendiente: " + saldoPendiente.toFixed(2) + "<br>";

    // Verificar si el préstamo ha sido pagado por completo
    if (saldoPendiente <= 0) {
      resultado += "Préstamo pagado por completo.";
      break;
    }
  }

  // Mostrar el resultado en la página
  document.getElementById('resultado').innerHTML = resultado;
}