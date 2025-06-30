function contar() {
  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var passo = Number(document.getElementById("contador").value);
  var contagem = document.getElementById("contagem");

  contagem.innerHTML = "Contando: <br>";

  if (inicio === 0 || fim === 0 || passo === 0 || passo > fim) {
    contagem.innerHTML =
      "Impossível contar, corrija os valores e tente novamente.";
    alert("Por favor, preencha todos os campos corretamente.");

    return;
  }

  if (inicio < fim) {
    for (var i = inicio; i <= fim; i += passo) {
      contagem.innerHTML += `${i} 👉 `;
    }
  } else {
    for (var i = inicio; i >= fim; i -= passo) {
      contagem.innerHTML += `${i} 👉 `;
    }
    return;
  }
}


document.addEventListener('keydown',function(e){

if(e.key === 'Enter') {
    contar();
  }



})
