function verificar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var ano = Number(document.getElementById("ano").value);
  var idade = data.getFullYear() - ano; // Calcula a idade
  sexSelecionada = document.querySelector('input[name="sexo"]:checked');

  if (
    isNaN(ano) ||
    ano.length == 0 ||
    ano > data.getFullYear() ||
    ano < 1900 ||
    sexSelecionada == null
  ) {
    msg.innerHTML = "Por favor, preencha todos os campos corretamente.";
    alert("Por favor, verifique os dados informados.");
    return;
  }

  if (idade <= 3) {
    msg.innerHTML = `Você tem ${idade} anos, vc é bebe.`;
    img.src = "/idade/assets/img/bebe.jpg";
  } else if (idade <= 12 && idade > 3) {
    if (sexSelecionada.value === "masc" ) {
      msg.innerHTML = `Você tem ${idade} anos, vc é criança.`;
      img.src = "/idade/assets/img/rapaz-pequeno-que-ri.jpg";
    } else {
      msg.innerHTML = `Você tem ${idade} anos, vc é criança.`;
      img.src = "/idade/assets/img/menina.jpg";
    }
  } else if (idade > 12 && idade < 60) {
    if (sexSelecionada.value === "masc") {
      msg.innerHTML = `Você tem ${idade} anos, vc é jovem.`;
      img.src = "/idade/assets/img/jovem.jpg";
    } else {
      msg.innerHTML = `Você tem ${idade} anos, vc é jovem.`;
      img.src = "/idade/assets/img/moça.jpg";
    }
  } else if (idade > 60) {
    if (sexSelecionada.value === "masc") {
      msg.innerHTML = `Você tem ${idade} anos, vc é idoso.`;
      img.src = "/idade/assets/img/idoso.jpg";
    } else {
      msg.innerHTML = `Você tem ${idade} anos, vc é idosa.`;
      img.src = "/idade/assets/img/senhora.png";
    }
  }
}




function verificar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let ano = Number(document.getElementById("ano").value);
  let idade = data.getFullYear() - ano; // Calcula a idade
  let sexSelecionada = document.querySelector('input[name="sexo"]:checked');

  const imagens = {
    bebe: "/idade/assets/img/bebe.jpg",
    criancaMasc: "/idade/assets/img/menino.jpg",
    criancaFem: "/idade/assets/img/menina.jpg",
    jovemMasc: "/idade/assets/img/jovem.jpg",
    jovemFem: "/idade/assets/img/moça.jpg",
    idosoMasc: "/idade/assets/img/idoso.jpg",
    idosoFem: "/idade/assets/img/senhora.png",
  };

  if (isNaN(ano) || ano > data.getFullYear() || ano < 1900 || sexSelecionada == null) {
    msg.innerHTML = "Por favor, preencha todos os campos corretamente.";
    alert("Por favor, verifique os dados informados.");
    return;
  }

  msg.innerHTML = `Você tem ${idade} anos, vc é ${
    idade <= 3 ? "bebê" :
    idade < 12 ? "criança" :
    idade < 60 ? "jovem" :
    sexSelecionada.value === "masc" ? "idoso" : "idosa"
  }.`;

  img.src = imagens[
    idade <= 3 ? "bebe" :
    idade < 12 ? (sexSelecionada.value === "masc" ? "criancaMasc" : "criancaFem") :
    idade < 60 ? (sexSelecionada.value === "masc" ? "jovemMasc" : "jovemFem") :
    (sexSelecionada.value === "masc" ? "idosoMasc" : "idosoFem")
  ];
}


document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.add("slide-out");
  setTimeout(() => {
    window.location.href = this.href;
  }, 500);
});



