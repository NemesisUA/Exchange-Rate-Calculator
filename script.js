// my API:  https://www.exchangerate-api.com/
// and ID:  1d7578694ef7606402b7f942
// url = 'https://v6.exchangerate-api.com/v6/1d7578694ef7606402b7f942/latest/USD';

const displayRate = document.getElementById('displayRate');
const swap = document.getElementById('swap-button');

const curr1Element = document.getElementById('curr1');
const curr2Element = document.getElementById('curr2');

const amount1El = document.getElementById('amount1');
const amount2El = document.getElementById('amount2');

function calculate() {  
    const currency1 = curr1Element.value;
    const currency2 =curr2Element.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
        .then(res => res.json())
        .then(data => {

            const rate = data.rates[`${currency2}`];
            displayRate.innerHTML = `1 ${currency1} = ${rate} ${currency2}`;
            amount2El.value = amount1El.value * rate;
            
        })
}

// event listeners
curr1Element.addEventListener('change', calculate);
curr2Element.addEventListener('change', calculate);

amount1El.addEventListener('change', calculate);
amount2El.addEventListener('change', calculate);

// swap currensies
swap.addEventListener('click', swapCurrensies);

function swapCurrensies(){
    let temp = curr1Element.value;
    curr1Element.value = curr2Element.value;
    curr2Element.value = temp;

    calculate();
}


calculate();