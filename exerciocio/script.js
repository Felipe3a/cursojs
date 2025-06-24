function contar() {
  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var passo = Number(document.getElementById("contador").value);    
  var contagem = document.getElementById("contagem");


while (inicio <= fim) {

    inicio +=passo;
    contagem.innerHTML += `${inicio} 👉 `;
 
  }
  
}
