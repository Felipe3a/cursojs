const area = document.getElementById("area");

area.addEventListener("click", () => {
  area.innerHTML = "Clicou!";
  area.className = "area vermelho";
});

area.addEventListener("mouseenter", () => {
  area.innerHTML = "Entrou!";
  area.className = "area azul";
});

area.addEventListener("mouseleave", () => {
  area.innerHTML = "Saiu!";
  area.className = "area verde";
});
