import { useState } from "react"


function CurrencyConverter(props) {
    const ratesData = props.currencyData["rates"]


    const [rubValue, setRub] = useState(0)
    const [foreignCurrencyValue, setForeignCurrencyValue] = useState(0)
    const [currentForeignCurrency, setForeignCurrency] = useState(Object.keys(ratesData)[0])
    const [isRubInputDisabled, setRubDisabled] = useState(false)
    const [isForeignCurrencyInputDisabled, setFCDisabled] = useState(true)


    const optionsRender = []
    for (let currency in ratesData) {
        optionsRender.push(<option value={currency} key={currency}>{currency}</option>)
    }

    function currencyInputHandler(event){
        if (event.target.name === "rubles"){
            setRub(event.target.value)
            setForeignCurrencyValue(event.target.value * ratesData[currentForeignCurrency])
        }else{
            setForeignCurrencyValue(event.target.value)
            setRub(event.target.value / ratesData[currentForeignCurrency])
        }
    }

    function foreignCurrencyChangeHandler(event){
        setForeignCurrency(event.target.value)
        
        if (isRubInputDisabled){
            setForeignCurrencyValue(foreignCurrencyValue)
            setRub(foreignCurrencyValue / ratesData[currentForeignCurrency])
        } else{
            setRub(rubValue)
            setForeignCurrencyValue(rubValue * ratesData[currentForeignCurrency])
        }

    }

    function swapHandler(event){
        const tmp = isRubInputDisabled
        setRubDisabled(isForeignCurrencyInputDisabled)
        setFCDisabled(tmp)
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>RUB</td>
                    <td>
                        <select name="currencies" id="currency-selector" onChange={foreignCurrencyChangeHandler}>
                            {optionsRender}
                        </select>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="number" name="rubles" id="ruble-input" value={rubValue} onInput={currencyInputHandler} disabled={isRubInputDisabled} />
                    </td>
                    <td>
                        <input type="number" name="current-currency-output" id="custom-currency-output" value={foreignCurrencyValue} onInput={currencyInputHandler} disabled={isForeignCurrencyInputDisabled} />
                    </td>
                </tr>

                <tr>
                    <td colSpan="2">
                        <button style={{ width: '100%' }} id="swap-button" onClick={swapHandler}>Swap</button>
                    </td>
                </tr>

                <tr>
                    <td colSpan="2">
                        <button style={{ width: '100%' }} id="update-button">Update rates</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CurrencyConverter