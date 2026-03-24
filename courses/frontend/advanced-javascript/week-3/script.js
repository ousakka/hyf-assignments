let currency = {};

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const userValue = document.getElementById("userValue");
const valueAfterExchange = document.getElementById("valueAfterExchange");
userValue.addEventListener("input", exchangeCurrency);
fromCurrency.addEventListener("change", exchangeCurrency);
toCurrency.addEventListener("change", exchangeCurrency);


function fetchingData() {
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      currency = data.rates;

      const currencyNames = Object.keys(currency);
      buildDropDowns(currencyNames);

      exchangeCurrency();
    })
    .catch((err) => {
      document.getElementById("app").style.display = "none";
      document.getElementById("errorMessage").textContent =
        "Something went wrong. Try again!";
    });
}

fetchingData();


function buildDropDowns(data) {
  data.forEach((name) => {
    const option1 = document.createElement("option");
    option1.value = name;
    option1.textContent = name;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = name;
    option2.textContent = name;
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "EUR";
  toCurrency.value = "DKK";
}


function exchangeCurrency() {
  const amount = parseFloat(userValue.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  const rateFrom = currency[from];
  const rateTo = currency[to];

  if (!amount || !rateFrom || !rateTo) return;

  const amountInUSD = amount / rateFrom;
  const result = amountInUSD * rateTo;

  valueAfterExchange.textContent = result.toFixed(2) + " " + to;
}



