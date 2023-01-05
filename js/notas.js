function calcularMedia() {
    // Obtener los valores de las notas
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    // Calculo
    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

    // Mostrar el resultado 
    var resultadoDiv = document.getElementById("resultado");
    if (media < 7) {
      resultadoDiv.innerHTML = "Reprobado con una media de " + media;
    } else {
      resultadoDiv.innerHTML = "Aprobado con una media de " + media;
    }
  }
