import './App.css';
import React, { useEffect, useState } from 'react';
import CurrencyPrices from './components/CurrencyPrices';
import CurrencyConverter from './components/CurrencyConverter'  

function App() {

  const [currencyRateJson, setCurrencyRate] = useState()

  useEffect(() => fetch("https://www.cbr-xml-daily.ru/latest.js").then(response => response.json()).then(result => {
    setCurrencyRate(result)
  }), [] )

  function updateRates(){
    fetch("https://www.cbr-xml-daily.ru/latest.js").then(response => response.json()).then(result => {setCurrencyRate(result)})
  }


  return currencyRateJson ? (
    <>
      <CurrencyConverter currencyData = {currencyRateJson} updateRates={updateRates}/>
      <CurrencyPrices currencyData = {currencyRateJson}/>
    </>
  ) : <></>
}

export default App;
