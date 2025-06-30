function tabuada() {
  var numero = Number(document.getElementById("inicio").value);
  var tabuada = document.getElementById("tabuada");
  var num = 1;

  tabuada.innerHTML = ""; // Limpa a tabela antes de adicionar novos itens
  if (numero === 0) {
    alert("Por favor, preencha o campo corretamente.");
    return;
  }

  while (num <= 10) {
    let item = document.createElement("option");
    item.text = `${numero} x ${num} = ${numero * num}`;
    tabuada.appendChild(item);
    num++;
  }

  if (numero === 1) {
    alert("nossa como você é burro, não sabe a tabuada do 1?!");
  }
}


document.addEventListener('keydown',function(e){

if(e.key === 'Enter') {
    tabuada();
  }



})






 



