const base_url = "https://www.cbr-xml-daily.ru/latest.js"

function populateCurrentValues(jsonData) {
    const toFill = document.getElementById("currency-curent-values")

    for (item in jsonData["rates"]) {
        const toAppendRow = document.createElement("tr")

        const toAppendCurrencyName = document.createElement("td")
        toAppendCurrencyName.textContent = item

        const toAppendCurrencyValue = document.createElement("td")
        toAppendCurrencyValue.textContent = jsonData["rates"][item]
        toAppendCurrencyValue.id = item

        toAppendRow.appendChild(toAppendCurrencyName)
        toAppendRow.appendChild(toAppendCurrencyValue)

        toFill.appendChild(toAppendRow)
    }
}

function populateCurrencySelector(jsonData) {
    const toFill = document.getElementById("currency-selector")

    for (item in jsonData["rates"]) {
        const toAppendOption = document.createElement("option")

        toAppendOption.textContent = item
        toAppendOption.value = item

        toFill.appendChild(toAppendOption)
    }

    toFill.for
}

fetch(base_url).then(response => response.json()).then(json => {
    populateCurrencySelector(json)
    populateCurrentValues(json)
})

const currency_input = document.getElementById("current-currency-input")

const targetCurrencySelector = document.getElementById("currency-selector")

const swapperButton = document.getElementById("swap-button")


// TODO Swap button. Decide to implement or delete

function calculateInput(event) {
    console.log(value)

    const currencies = document.getElementsByClassName("currency_to_swap")

    const value = document.getElementById("current-currency-input").value
    const output = document.getElementById("current-currency-output")

    const inputCurrency = currencies[0].textContent
    const outputCurrency = currencies[1].firstElementChild.value

    const currencyRate = +document.getElementById(outputCurrency).textContent

    console.log(currencyRate);

    output.value = value * currencyRate
}

function changeTargetCurrency(event) {
    const currencies = document.getElementsByClassName("currency_to_swap")

    const value = document.getElementById("current-currency-input").value
    const output = document.getElementById("current-currency-output")

    const inputCurrency = currencies[0].textContent
    const outputCurrency = currencies[1].firstElementChild.value

    const currencyRate = +document.getElementById(outputCurrency).textContent

    console.log(currencyRate);

    output.value = value * currencyRate
}

function swapInputCurrency(event) {

}

currency_input.addEventListener("input", calculateInput)
targetCurrencySelector.addEventListener("change", changeTargetCurrency)

swapperButton.addEventListener("click", swapInputCurrency)