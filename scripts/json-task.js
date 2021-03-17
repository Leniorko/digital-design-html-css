const base_url = "https://www.cbr-xml-daily.ru/latest.js"

function populateCurrentValues(jsonData){
    const toFill = document.getElementById("currency-curent-values")

    for (item in jsonData["rates"]){
        const toAppendRow = document.createElement("tr")

        const toAppendCurrencyName = document.createElement("td")
        toAppendCurrencyName.textContent = toAppendCurrencyName.id = item

        const toAppendCurrencyValue = document.createElement("td")
        toAppendCurrencyValue.textContent = jsonData["rates"][item]

        toAppendRow.appendChild(toAppendCurrencyName)
        toAppendRow.appendChild(toAppendCurrencyValue)

        toFill.appendChild(toAppendRow)
    }   
}

function populateCurrencySelector(jsonData){
    const toFill = document.getElementById("currency-selector")

    for (item in jsonData["rates"]){
        const toAppendOption = document.createElement("option")

        toAppendOption.textContent = toAppendOption.id = item
        toAppendOption.value = item

        toFill.appendChild(toAppendOption)
    }

    toFill.for
}

fetch(base_url).then(response => response.json()).then(json =>
    {
        populateCurrencySelector(json)
        populateCurrentValues(json)
    })

var currency_input = document.getElementById("current-currency-input")


// TODO Add event listener to currency_input to auto calculation on prior currency
// TODO Event listener for currency change
// TODO Swap button. Decide to implement or delete

currency_input.addEventListener("input", (event) =>{
    console.log(event.target.value)



})