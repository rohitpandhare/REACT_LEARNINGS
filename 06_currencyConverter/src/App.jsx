import { useState } from 'react'
import { InputBox } from './components'
import UseCurrancyInfo from './customHooks/UseCurrancyInfo'

function App() {

    const [amount,setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] =  useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);


    const currencyInfo = UseCurrancyInfo(from); //pass 'from' which currency to convert

    //retrive keys from api output---
    const options = Object.keys(currencyInfo);

    //to swap currencies
    const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
    }

    /** Like 1 usd= 80 rs. for 5$ we will = 5*80 */
    const convert = () => {
      if (currencyInfo[to]) {
          setConvertedAmount(amount * currencyInfo[to]);
      } else {
          console.error(`Currency info for ${to} is not available.`);
      }
  }

    const bgImg = 'https://static.vecteezy.com/system/resources/previews/002/151/430/original/global-currency-exchange-icon-transfer-money-stock-market-abstract-background-vector.jpg';

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-black"
        style={{ backgroundImage: `url('${bgImg}')`}}
    >
    <h1 className='text-6xl text-purple-100' >Currency Converter</h1>

    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();      
                convert() //converts amount
              }}
            >

            <div className="w-full mb-1">
                <InputBox 
                label="From"
                amount={amount}
                currencOptions={options}

                onCurrancyChange={(currency) => setFrom(currency)}
                selectCurrancy={from}

                onAmountChange={(amount) => setAmount(amount)}/> 
                {/* fetch amount  */}
            </div>
      {/* onCurrencyChange and onAmountChange are from inputBox.jsx  */}
          
            <div className="relative w-full h-0.5">
                <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}>
                swap
              </button>
            </div>
                {/* reuse of input box component  */}
            <div className="w-full mt-1 mb-4">
                <InputBox 
                label="To"
                amount={convertedAmount}
                currencOptions={options}

                onCurrancyChange={(currency) => setTo(currency)}
                selectCurrancy={to}

                amountDisable/>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
  </div> 

  );
}

export default App
