function ejecutarOpcion() {

  let opcion = document.getElementById("opciones").value;
  let mensaje = document.getElementById("mensaje");

  mensaje.className = "";

  switch (opcion) {
    case "100":
      mensaje.textContent = "🎉 ¡Felicitaciones! El valor es exactamente 100. ";
      mensaje.classList.add("");
      break;
    default:
      mensaje.textContent = "⚠️ No ha seleccionado ninguna opción";
      mensaje.classList.add("vacio");
      break;
  }
}






