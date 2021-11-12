//Converter em real
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valorDolar = document.getElementById("valorDolar");
  var valorEuro = document.getElementById("valorEuro");
  var valorLibra = document.getElementById("valorLibra");
  var valorBitcoin = document.getElementById("valorBitcoin");

  var valor = valorElemento.value;
  var Dolar = valorDolar.value;
  var Euro = valorEuro.value;
  var Libra = valorLibra.value;
  var Bitcoin = valorBitcoin.value;

  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmLibraNumerico = parseFloat(valor);
  var valorEmBitcoinNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * Dolar;
  console.log(valorEmReal);
  var valorEmEuro = valorEmDolarNumerico * Euro;
  console.log(valorEmEuro);
  var valorEmLibra = valorEmDolarNumerico * Libra;
  console.log(valorEmLibra);
  var valorEmBitcoin = valorEmDolarNumerico * Bitcoin;
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado de dolar em Reais é: R$" +
    valorEmReal +
    "<br>O resultado de Euro em Reais é:R$" +
    valorEmEuro +
    "<br> O resultado de Libra em Reais é: R$" +
    valorEmLibra +
    "<br> O resultado de Bitcoin em Reais é: R$" +
    valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}
