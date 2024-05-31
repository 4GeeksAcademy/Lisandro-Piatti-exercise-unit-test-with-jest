const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));





// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (amountDollar) => {
    return  (amountDollar / oneEuroIs.USD) * oneEuroIs.JPY;
}

const fromEuroToDollar = (amountEuro) => {
    let valueInDollar = amountEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromYenToPound = (amountYen) => {
    return (amountYen / oneEuroIs.JPY) * oneEuroIs.GBP;
}


module.exports = {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};