import React, {useId} from 'react'

//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// const id = useId()

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrancyChange,

  currencOptions = [],
  selectCurrancy = 'usd',

  amountDisable = false,
  currancyDisable = false,

  className = "",
}) 
  {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>

            <div className="w-1/2">
                <label htmlFor={amountInputId}className="text-black/40 mb-2 inline-block"> {label} </label>
                
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable} //to check amount is enabled or disabled??
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // returns number 
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrancy}
                    onChange={(e) => onCurrancyChange  && onCurrancyChange(e.target.value)}
                      /* returns string  */
                    disabled = {currancyDisable}
                >

                      {currencOptions.map((currency) => 
                      (
                      <option key={currency} value={currency}>{currency}
                      </option>
                      ))}
                </select>
            </div>

        </div>
    );
}

export default InputBox;

