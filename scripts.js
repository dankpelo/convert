const USD = 5.09
const EUR = 5.91
const GBP = 6.89
const JPY = 0.033
const ARS = 0.0034
const CNY = 0.76

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
}) 

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
        case 'JPY':
            convertCurrency(amount.value, JPY, '¥')
            break
        case 'ARS':
            convertCurrency(amount.value, ARS, '$')
            break
        case 'CNY':
            convertCurrency(amount.value, CNY, '¥')
            break
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol}1,00 = ${formatCurrencyBRL(price)}`

        let total = amount * price
        total = formatCurrencyBRL(total)
        result.textContent = `${total}`
        footer.classList.add('show-result')
    } catch (error) {
        footer.classList.remove('show-result')
        console.log(error)
        alert('Não foi possível converter, tente novamente mais tarde.')
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}