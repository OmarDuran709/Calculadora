const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");
const botonClear = document.querySelector('[data-accion="clear"]');

let operacion = "";
let resultadoMostrado = false;
let clearPulsado = false;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const valor = boton.getAttribute("data-valor");
    const accion = boton.getAttribute("data-accion");

    if (accion === "clear") {
      operacion = "";
      pantalla.textContent = "0";
      resultadoMostrado = false;

      if (accion === "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
        botonClear.textContent = "C";
        clearPulsado = true;
      }

    } else if (accion === "igual") {
      try {
        const resultado = eval(operacion);

        if (operacion === "0/0") {
          pantalla.textContent = "Infinito";
        } else if (isNaN(resultado)) {
          pantalla.textContent = "Error";
        } else {
          pantalla.textContent = resultado;
        }

        operacion = resultado.toString();
        resultadoMostrado = true;

      } catch (e) {
        pantalla.textContent = "Error";
        operacion = "";
        resultadoMostrado = false;
      }

    } else {
      if (resultadoMostrado && !esOperador(valor)) {
        operacion = "";
        resultadoMostrado = false;
      }

      operacion += valor;
      pantalla.textContent = operacion;
    }
  });
});

function esOperador(caracter) {
  return caracter === "+" || caracter === "-" || caracter === "*" || caracter === "/";
}
