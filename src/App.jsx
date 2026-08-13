import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

 return (
  <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

    {/* Background Effects */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
    </div>

    {/* Navbar */}
    <nav className="relative z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-xl font-bold">↔</span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Currency<span className="text-cyan-400">X</span>
            </h1>

            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              Currency Converter
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
          <span className="hover:text-white transition cursor-pointer">
            Home
          </span>

          <span className="hover:text-white transition cursor-pointer">
            Exchange Rates
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            Live Converter
          </span>
        </div>

      </div>
    </nav>


    {/* Main Content */}
    <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Intro Section */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Live Currency Converter
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Convert your money
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              without the hassle.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-400 leading-8">
            A simple and fast currency converter designed to help you
            calculate exchange values instantly. Select your currencies,
            enter an amount, and get your conversion in seconds.
          </p>


          {/* Small Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mt-9">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">150+</p>
              <p className="text-xs text-gray-500 mt-1">
                Currencies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-xs text-gray-500 mt-1">
                Available
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">Fast</p>
              <p className="text-xs text-gray-500 mt-1">
                Conversion
              </p>
            </div>

          </div>


          <div className="flex flex-wrap gap-5 mt-7 text-sm text-gray-500">
            <span>✓ Easy to use</span>
            <span>✓ Responsive design</span>
            <span>✓ Live API</span>
          </div>

        </div>


        {/* Converter Section */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.08] backdrop-blur-2xl p-5 sm:p-7 shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between mb-7">

              <div>
                <p className="text-sm text-gray-400">
                  Currency Converter
                </p>

                <h3 className="text-xl font-semibold mt-1">
                  Exchange your money
                </h3>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-400/10 border border-green-400/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                <span className="text-xs text-green-400">
                  Live
                </span>
              </div>

            </div>


            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >

              {/* From */}
              <div className="w-full mb-2">

                <InputBox
                  label="You Send"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  className="shadow-lg"
                />

              </div>


              {/* Swap */}
              <div className="relative w-full h-10">

                <div className="absolute left-0 right-0 top-1/2 border-t border-white/10" />

                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-4 border-slate-950 bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:scale-110 hover:rotate-180 transition-all duration-500"
                  onClick={swap}
                >
                  ↕
                </button>

              </div>


              {/* To */}
              <div className="w-full mt-2 mb-5">

                <InputBox
                  label="You Receive"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={from}
                  amountDisable
                  className="shadow-lg"
                />

              </div>


              {/* Info */}
              <div className="flex items-center justify-between px-4 py-3 mb-5 rounded-xl bg-white/5 border border-white/10">

                <div>
                  <p className="text-xs text-gray-500">
                    Conversion
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {from.toUpperCase()} → {to.toUpperCase()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    Status
                  </p>

                  <p className="text-sm text-green-400 mt-1">
                    Ready
                  </p>
                </div>

              </div>


              {/* Convert Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-4 rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >

                <span className="relative z-10">
                  Convert {from.toUpperCase()} → {to.toUpperCase()}
                </span>

                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              </button>

            </form>

          </div>

        </div>

      </div>


      {/* Features */}
      <section className="mt-20">

        <div className="text-center mb-10">

          <p className="text-cyan-400 text-sm font-medium">
            WHY USE IT?
          </p>

          <h3 className="text-3xl font-bold mt-2">
            Currency conversion made simple
          </h3>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you need for quick and convenient currency
            calculations in one clean interface.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-5">

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-2xl mb-5">
              ⚡
            </div>

            <h4 className="text-lg font-semibold">
              Fast Conversion
            </h4>

            <p className="text-gray-500 text-sm leading-6 mt-2">
              Quickly calculate the value of your money without
              unnecessary steps.
            </p>

          </div>


          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-2xl mb-5">
              🌎
            </div>

            <h4 className="text-lg font-semibold">
              Global Currencies
            </h4>

            <p className="text-gray-500 text-sm leading-6 mt-2">
              Switch between different currencies and calculate
              international exchange values easily.
            </p>

          </div>


          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-2xl mb-5">
              ✨
            </div>

            <h4 className="text-lg font-semibold">
              Clean Experience
            </h4>

            <p className="text-gray-500 text-sm leading-6 mt-2">
              A modern responsive interface that works smoothly
              across desktop, tablet and mobile devices.
            </p>

          </div>

        </div>

      </section>

    </main>


    {/* Footer */}
    <footer className="relative z-10 border-t border-white/10 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">

        <p className="text-sm text-gray-500">
          © 2026 CurrencyX. Built with React & Tailwind CSS.
        </p>

        <p className="text-sm text-gray-600">
          Simple. Fast. Global.
        </p>

      </div>

    </footer>

  </div>
);
}
export default App