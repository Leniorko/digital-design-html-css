// Component that renders all current values of currencies

function CurrencyPrices(props) {

    let ratesRows = []

    for (let item in props.currencyData["rates"]) {
        ratesRows.push(
            <tr key={item}>
                <td>{item}</td>
                <td>{props.currencyData["rates"][item]}</td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {ratesRows}
            </tbody>
        </table>
    )
}

export default CurrencyPrices