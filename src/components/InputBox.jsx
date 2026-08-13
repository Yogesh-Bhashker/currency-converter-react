import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`rounded-2xl p-4 text-sm flex items-end gap-4 border border-gray-200 shadow-sm ${className}`}
    >

      {/* Amount */}
      <div className="w-1/2">

        <label
          htmlFor={amountInputId}
          className="text-gray-500 text-xs font-medium mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1 text-2xl font-semibold text-gray-900 placeholder:text-gray-300"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(Number(e.target.value))
          }
        />

      </div>


      {/* Currency */}
      <div className="w-1/2">

        <p className="text-gray-400 text-xs mb-2">
          Currency
        </p>

        <select
          className="w-full rounded-xl px-3 py-3 bg-gray-100 text-gray-800 font-semibold cursor-pointer outline-none border border-gray-200 hover:bg-gray-200 transition"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange &&
            onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >

          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency.toUpperCase()}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}

export default InputBox;