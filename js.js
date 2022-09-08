function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = parseFloat(valorElemento.value);

  var valorEmReal = (valor * 5).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (document.getElementById("valorConvertido").innerHTML =
    "O resultado em real é " + valorEmReal);
}
