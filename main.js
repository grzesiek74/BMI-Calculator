const growth = document.querySelector('#growth');
const weight = document.querySelector('#weight');
const sex = document.querySelector('#sex');
const countBtn = document.querySelector('.count');
const error = document.querySelector('.error');
const result = document.querySelector('.result');
const spanCheck = document.querySelector('.check');
const bmi = document.querySelector('.bmi');
const cleanBtn = document.querySelector('.clear');


const checkInputs = () => {

    if(growth.value !== '' && weight.value !== '' && sex.value !== 'none') {
        // console.log('ok');
        calculateBMI();
        error.innerText = '';
    } else {
        error.innerText = 'Uzupełnij wszystkie pola!';
        result.style.visibility = 'hidden';
        bmi.innerText = '';
        // sex.value = 'none';
    }
}


const calculateBMI = () => {

    if(sex.value === 'woman' || sex.value ==='man') {
        
        const newGrowth = growth.value / 100;
        const calc = weight.value / (newGrowth * newGrowth);
       
        bmi.innerHTML = `Wskaźnik BMI wynosi: <span class="bmiResult">${calc.toFixed(2)}</span>`;

        bmiScopes(calc);
    } 

}


const bmiScopes = score => {

    result.style.visibility = 'visible';

    if(score < 16) {
        spanCheck.innerText = 'wygłodzenie';
        spanCheck.style.color = 'blue';
    } else if (score >= 16 && score <= 16.99) {
        spanCheck.innerText = 'wychudzenie';
        spanCheck.style.color = 'royalblue';
    } else if(score >= 17 && score <= 18.49) {
        spanCheck.innerText = 'niedowagę';
        spanCheck.style.color = 'lightgreen';
    } else if(score >= 18.5 && score <= 24.99) {
        spanCheck.innerText = 'wagę prawidłową';
        spanCheck.style.color = 'green';
    } else if(score >= 25 && score <= 29.99) {
        spanCheck.innerText = 'nadwagę';
        spanCheck.style.color = 'yellow';
    } else if(score >= 30 && score <= 34.99) {
        spanCheck.innerText = 'otyłość I stopnia';
        spanCheck.style.color = 'orange';
    } else if(score >= 35 && score <= 39.99) {
        spanCheck.innerText = 'otyłość II stopnia';
        spanCheck.style.color = 'orangered';
    } else {
        spanCheck.innerText = 'otyłość III stopnia';
        spanCheck.style.color = 'red';
    }
}


const clean = () => {

    growth.value = '';
    weight.value = '';
    sex.value = 'none';
    result.style.visibility = 'hidden';
    spanCheck.innerText = '';
    error.textContent = '';
    bmi.innerText = '';
}


countBtn.addEventListener('click', checkInputs);
cleanBtn.addEventListener('click', clean);