// script.js
const btn = document.getElementById('btn');
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');

btn.addEventListener('click', async () => {
  const text = textInput.value;
  const delay = Number(delayInput.value) * 1000;

  await delayFunction(delay);
  displayMessage(text);
});

function delayFunction(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayMessage(message) {
  outputDiv.textContent = message;
}
