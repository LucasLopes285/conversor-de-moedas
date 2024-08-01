document.addEventListener("DOMContentLoaded", () => {
    const converterForm = document.getElementById("converterForm");
    const resultMessage = document.getElementById("resultMessage");

    const exchangeRates = {
        "USD": { "BRL": 4.8, "EUR": 0.85 },
        "BRL": { "USD": 0.21, "EUR": 0.18 },
        "EUR": { "USD": 1.18, "BRL": 5.6 }
    };

    converterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;

        if (fromCurrency === toCurrency) {
            resultMessage.textContent = `Por favor, selecione moedas diferentes para conversão.`;
            resultMessage.style.color = "red";
            return;
        }

        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        resultMessage.textContent = `${amount} ${fromCurrency} é igual a ${convertedAmount.toFixed(2)} ${toCurrency}.`;
        resultMessage.style.color = "green";
    });
});
