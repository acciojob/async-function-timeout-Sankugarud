let btn = document.getElementById('btn');
btn.addEventListener('click', callme);
cy.get("div#output").should("have.text", "Test - 2");
async function callme() {
  let textInput = document.getElementById('text');
  let inputValue = textInput.value;

  let numberInput = document.getElementById('delay');
  let numberValue = numberInput.value;

  await new Promise(resolve => {
    setTimeout(resolve, numberValue * 1000);
  });

  let output = document.getElementById('output');
  output.innerHTML = inputValue;
}
