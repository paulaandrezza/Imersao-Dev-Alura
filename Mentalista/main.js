var numeroSecreto = parseInt(Math.random() * 1001);
console.log(numeroSecreto);
var nVezes = 0;

while(chute != numeroSecreto) {
  var chute = prompt("Digite um numero entre 0 e 1000");
  if (nVezes === 10) {
    alert("Número de vezes excedido, o número secreto é: " + numeroSecreto);
    break;
  }
  if (chute == numeroSecreto) {
    alert("Parabéns, você acertou!");
  } else if (chute > numeroSecreto) {
    alert("Você errou! o número secreto é menor.");
  } else {
    alert("Você errou! o número secreto é maior.");
  }
  nVezes++;
  console.log(nVezes);
}