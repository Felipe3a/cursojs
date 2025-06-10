function carregar() {
  var saldacao = document.getElementById("saldacao");
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes(); // Obtém os minutos

  saldacao.innerHTML = `${hora}:${minutos}h`;

  if (hora >= 0 && hora < 12) {
    // Bom dia

    img.src = "dia.png";
    document.body.style.background = "#e2cd9f";
    msg.innerHTML = "Bom dia!";
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = "tarde.png";
    document.body.style.background = "#b9846f";
    msg.innerHTML = "Boa tarde!";
  } else {
    // Boa noite
    img.src = "noite.png";
    document.body.style.background = "#515154";
    msg.innerHTML = "Boa noite!";
  }
}



document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.add("slide-out");
  setTimeout(() => {
    window.location.href = this.href;
  }, 500);
});
