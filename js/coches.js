function calcularDescuento() {
    // Obtener el nombre del coche
    let nombreCoche = document.getElementById("coche").value;
  
    // Establecer el descuento en 0 por defecto
    let descuento = 0;
  
    // Si el nombre del coche es "ford fiesta", establecer el descuento en 5%
    if (nombreCoche.toLowerCase() === "ford fiesta") {
      descuento = 5;
    }
    // Si el nombre del coche es "ford focus", establecer el descuento en 10%
    else if (nombreCoche.toLowerCase() === "ford focus") {
      descuento = 10;
    }
  
    // imprimir descuento
    document.getElementById("resultado").innerHTML = "Tu descuento es del " + descuento + "%";
  }
  
