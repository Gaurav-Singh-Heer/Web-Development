# 💱 React Currency Converter — Custom Hook Notes

## 🧠 What are Hooks?

Hooks are **functions that return values** and allow us to use React features like state and lifecycle inside functional components.

Example built-in hooks:

* `useState`
* `useEffect`
* `useRef`
* `useId`

We can also create **our own hooks** → called **Custom Hooks**.

> A custom hook is simply a function whose name starts with `use` and can internally use other hooks.

---

# 📁 Project Folder Structure

```
src/
 ├─ hooks/
 │   └─ useCurrencyInfo.js
 ├─ components/
 │   ├─ Input.jsx
 │   └─ index.js
 ├─ App.jsx
```

---

# 🔧 STEP 1 — Create Custom Hook

### 📁 `src/hooks/useCurrencyInfo.js`

## 🎯 Purpose

Fetch currency conversion data from API and return it.

## 🌐 API Used

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
```

Example:

```
.../currencies/inr.json
```

This returns:

```
1 INR = how much of other currencies
```

---

## 🧾 Code

```js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
```

---

## 🔍 Explanation

### `useState`

Stores API data.

```js
const [data, setData] = useState({})
```

### `useEffect`

Runs whenever currency changes.

```js
useEffect(() => { ... }, [currency])
```

When component mounts OR currency changes:
→ Fetch API
→ Store result in state

### Return value

Hook returns:

```
{ usd: 1, inr: 83, eur: 0.92 ... }
```

So component can use it.

---

# 🔧 STEP 2 — Input Component

### 📁 `src/components/Input.jsx`

This component handles:

* Amount input
* Currency dropdown

---

## 🧾 Code

```jsx
import React, { useId } from "react";

function Input({
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
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}>{label}</label>

                <input
                    id={amountInputId}
                    type="number"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            <div className="w-1/2 text-right">
                <p>Currency Type</p>

                <select
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;
```

---

## 🔍 Explanation

### `useId()`

Generates unique id for accessibility.

```js
const amountInputId = useId()
```

Used to connect:

```
<label htmlFor="id" />
<input id="id" />
```

---

### Props used

| Prop             | Purpose           |
| ---------------- | ----------------- |
| label            | Input label       |
| amount           | Value             |
| onAmountChange   | Change amount     |
| onCurrencyChange | Change currency   |
| currencyOptions  | Dropdown list     |
| selectCurrency   | Selected currency |
| amountDisable    | Disable input     |
| currencyDisable  | Disable select    |

---

# 🔧 STEP 3 — Component Export Method

### 📁 `src/components/index.js`

```js
import Input from "./Input";
export { Input };
```

Now import easily:

```js
import { Input } from "./components";
```

---

# 🔧 STEP 4 — Main App

### 📁 `App.jsx`

## 🧾 Code

```jsx
import { Input } from './components'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currency = useCurrencyInfo(from);
  const options = Object.keys(currency || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currency[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-md w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >

          <Input
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={setAmount}
          />

          <button type="button" onClick={swap}>
            Swap
          </button>

          <Input
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />

          <button type="submit">
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;
```

---

# 🔍 App Logic Explanation

### State variables

```js
amount → entered amount
from → source currency
to → target currency
convertedAmount → result
```

---

### Custom Hook Usage

```js
const currency = useCurrencyInfo(from)
```

Returns:

```
{ inr: 83, eur: 0.9, ... }
```

---

### Currency options

```js
const options = Object.keys(currency)
```

Creates dropdown list.

---

### Convert Function

```js
setConvertedAmount(amount * currency[to])
```

Example:

```
10 USD * 83 = 830 INR
```

---

### Swap Function

```js
setFrom(to)
setTo(from)
```

Swaps currencies.

---

# 🎯 Key Concepts Learned

## Custom Hooks

Reusable logic with state + effects.

## useEffect

Runs when dependency changes.

## useState

Stores data.

## useId

Unique id for accessibility.

## Controlled Inputs

React controls input value.

## Props Communication

Parent → Child → Parent.

---

# 🚀 Final Flow

1. User enters amount
2. Select currency
3. Hook fetches rates
4. Convert clicked
5. Result shown

---

# 🏁 Summary

We built:

* Custom Hook for API
* Reusable Input component
* Currency Converter app
* Swap + Convert logic

This project teaches:

* Hooks deeply
* Reusability
* API handling
* Clean architecture

---

# 📌 Interview Questions

**Q1:** Why custom hooks start with `use`?
→ React identifies it as a hook.

**Q2:** Can hooks be inside loops?
→ ❌ No.

**Q3:** When does useEffect run?
→ On mount + dependency change.

**Q4:** What does custom hook return?
→ Any value (state/data/function).

---

# 💡 Improvement Ideas

* Add loading spinner
* Add error handling
* Add flag icons
* Add debounce input
* Use axios
* Add caching

---

# 🧑‍💻 Author Notes

Project built to understand:

* Custom hooks
* API handling
* Component reusability
* React architecture

---