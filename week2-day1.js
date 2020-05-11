//1. Define amount of monney
let amount = Number(prompt("How much money?"));

//2. Define from which currency
let from = prompt("What currency are you using? 'vnd' or 'usd'");

//3. Define to which currency
let to = prompt("What currency do you want to convert it to 'vnd' or 'usd'? ");


//Currency Exchange
const exchangeRate = 23208;

//From VND to USD:
function vndToUsd(amount) {
    return (amount / exchangeRate).toFixed(2);
}

// const returnedFromFunctionCall = vndToUsd(23000);
// console.log(
//     "The value returned from the call to vndToUsd",
//     returnedFromFunctionCall
// );

//From USD to VND:
function usdToVnd(amount) {
    return (amount * exchangeRate).toFixed(2);
}

//Milestone 7

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}


function convertCurrency(from, amount, to) {
    if (from === 'vnd' && to === 'usd') {
        alert(`${amount} ${from} to ${to} is ` + formatCurrency('USD', vndToUsd(amount)));
    } else if (from === 'usd' && to === 'vnd') {
        alert(`${amount} ${from} to ${to} is ` + formatCurrency('VND', usdToVnd(amount)));
    } else if (from === 'vnd' && to === 'vnd') {
        alert("Please exchange VND to a different currency");
    } else if (from === 'usd' && to === 'usd') {
        alert("Please exchange USD to a different currency");
    } else {
        alert("Please check the data that you have typed");
    }
}

convertCurrency(from, amount, to);
