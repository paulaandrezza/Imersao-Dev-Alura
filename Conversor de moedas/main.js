var valorEmDolar = prompt('Digite um valor em Dolar')

var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

alert("R$ " + valorEmReal);