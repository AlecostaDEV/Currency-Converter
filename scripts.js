/*
    Resumo:
        primeiro pego pelo ID o meu botão e o select do .html
        crio um eventlistener (final do código) para que toda vez que interagir com o botão e com o select,
        chame uma função, seja das conversões ou da mudança do texto e imagens
 */


const button = document.getElementById("convert-button")
//peguei o botão que está no index.HTML, criei um ID para ele
//pelo ID dele, criei uma variável (const button) para ser adicionado um evento..
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000068

//aqui criei a função que fará as conversões
const convertValues = () => {
  const inputReais = document.getElementById("input-real").value //pega o valor que será digitado no meu input
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  //realValueText.innerHTML = inputReais //- aqui foi feito sem a formatação para currency -//
  //currencyValueText.innerHTML = (inputReais / dolar) //- aqui foi feito sem a formatação para currency -//

  //aqui uso a biblioteca de formatação para currency
  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  else if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }

  else { currencyValueText.innerHTML = (inputReais * bitcoin) }
  //pego a variavel currencyValueText que é a minha currency-value-text do .html
}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")

  if (select.value === "US$ Dólar americano") { //se no select estiver US$ Dólar americano
    currencyName.innerHTML = "Dólar americano" //aqui mudo o texto do meu <p> para "Dólar americano"
    currencyImg.src = "./assets/eua.png" //aqui mudo o caminho da imagem para bandeira dos EUA
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues() //aqui eu chamo a função que converte os valores
                  //para que quando eu mudar meu item do select,
                  //já seja feito a conversão sem precisar clicar no botão
}

button.addEventListener("click", convertValues)
//quando esccuto o evento click, chamo a função convertValues, criada acima

select.addEventListener("change", changeCurrency)
//quando esccuto o evento change, chamo a função changeCurrency, criada acima
//o evento change, é quando mudo entre as opções do meu select
