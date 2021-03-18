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

const rub_input = document.getElementById("rub-currency-field")

const custom_input = document.getElementById("custom-currency-output")

const targetCurrencySelector = document.getElementById("currency-selector")

const swapperButton = document.getElementById("swap-button")

function calculateInput(event) {
    const currencies = document.getElementsByClassName("currency_to_swap")

    const rubValue = document.getElementById("rub-currency-field")
    const customValue = document.getElementById("custom-currency-output")

    let inputCurrency
    let outputCurrency
    let currencyRate

    if (customValue.disabled) {
        inputCurrency = currencies[0].textContent
        outputCurrency = currencies[1].firstElementChild.value
        currencyRate = +document.getElementById(outputCurrency).textContent
    } else {
        outputCurrency = currencies[0].textContent
        inputCurrency = currencies[1].firstElementChild.value
        currencyRate = +document.getElementById(inputCurrency).textContent
    }



    console.log(currencyRate);

    if (customValue.disabled) {
        customValue.value = rubValue.value * currencyRate
        console.log(rubValue.value * currencyRate)
    } else {
        rubValue.value = customValue.value * currencyRate
        console.log(customValue.value * 100);
    }


}

function changeTargetCurrency(event) {

    const currencies = document.getElementsByClassName("currency_to_swap")

    const rubValue = document.getElementById("rub-currency-field")
    const customValue = document.getElementById("custom-currency-output")

    let inputCurrency
    let outputCurrency
    let currencyRate

    if (customValue.disabled) {
        inputCurrency = currencies[0].textContent
        outputCurrency = currencies[1].firstElementChild.value
        currencyRate = +document.getElementById(outputCurrency).textContent
    } else {
        outputCurrency = currencies[0].textContent
        inputCurrency = currencies[1].firstElementChild.value
        currencyRate = +document.getElementById(inputCurrency).textContent
    }



    console.log(currencyRate);

    if (customValue.disabled) {
        customValue.value = rubValue.value * currencyRate
        console.log(rubValue.value * currencyRate)
    } else {
        rubValue.value = customValue.value * currencyRate
        console.log(customValue.value * 100);
    }
}

function swapInputCurrency(event) {
    const rubNode = document.getElementById("rub-currency-field")
    const customNode = document.getElementById("custom-currency-output")


    const tmp = rubNode.disabled
    rubNode.disabled = customNode.disabled
    customNode.disabled = tmp

}

rub_input.addEventListener("input", calculateInput)
custom_input.addEventListener("input", calculateInput)
targetCurrencySelector.addEventListener("change", changeTargetCurrency)

swapperButton.addEventListener("click", swapInputCurrency)