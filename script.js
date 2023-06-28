//your JS code here. If required.

let btn = document.getElementById('btn');
btn.addEventListener('click', callme);



async function callme(){
	let text = document.getElementById('text');
	let inputValue = text.value;

	

	let number = document.getElementById('delay');
		let numberValue = number.value;
	
	await new Promise(resolve => {
    setTimeout(resolve, numberValue * 1000);
  });
		let output = document.getElementById('output');
			output.innerHTML = inputValue;

}