function ola() {
  console.log("olá");
}
function tichau() {
  console.log("tichau");
}

var oi = "a";
var bye = "b";

var mensagem = "b";

switch (mensagem) {
  case "a":
    ola();
    break;
  case "b":
    tichau();
    break;
  default:
    console.log("mensagem não reconhecida");
    break;
}
