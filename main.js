const cardNumberInput = document.getElementById('card');
const cardNameInput = document.getElementById('name');
const cardMonthInput = document.getElementById('mm');
const cardYearInput = document.getElementById('yy');
const cardCvcInput = document.getElementById('cvc');

const cardNumberDisplay = document.querySelector('.card-front .number');
const cardNameDisplay = document.querySelector('.card-front .name-exp div:first-child');
const cardExpDisplay = document.querySelector('.card-front .name-exp div:last-child');
const cardCvcDisplay = document.querySelector('.card-back .cvc');
const form = document.querySelector('.form');
const confirmation = document.querySelector('.confirmation');
const confirmBtn = document.getElementById('confirmBtn');

const isFilled = input => input.value.trim() !== '';

function updateDisplay() {
  let raw = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
  let formatted = raw.replace(/(.{4})/g, '$1 ').trim();
  cardNumberInput.value = formatted;

  if (formatted) {
    cardNumberDisplay.textContent = formatted;
  } else {
    cardNumberDisplay.textContent = '0000 0000 0000 0000';
  }

  if (cardNameInput.value) {
    cardNameDisplay.textContent = cardNameInput.value;
  } else {
    cardNameDisplay.textContent = 'JANE APPLESEED';
  }

  let mm = cardMonthInput.value.padStart(2, '0');
  let yy = cardYearInput.value.padStart(2, '0');

  if (mm || yy) {
    cardExpDisplay.textContent = `${mm}/${yy}`;
  } else {
    cardExpDisplay.textContent = '00/00';
  }

  // CVC
  if (cardCvcInput.value) {
    cardCvcDisplay.textContent = cardCvcInput.value;
  } else {
    cardCvcDisplay.textContent = '000';
  }
}


[cardNumberInput, cardNameInput, cardMonthInput, cardYearInput, cardCvcInput].forEach(input => {
  input.addEventListener('input', updateDisplay);
});

cardMonthInput.maxLength = 2;
cardYearInput.maxLength = 2;
cardCvcInput.maxLength = 3;

confirmBtn.addEventListener('click', () => {
  if ([cardNameInput, cardNumberInput, cardMonthInput, cardYearInput, cardCvcInput].every(isFilled)) {
    form.style.display = 'none';
    confirmation.classList.add('show');
  } else {
    alert("iltimos hammasini toldiring");
  }
});