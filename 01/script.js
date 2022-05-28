console.log('Working');

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
let btnToClick = document.querySelector('button[id="btnToClick"]');

btnToClick.addEventListener('click', function (event) {
	console.log(`${event.type} click!`);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let foco = document.querySelector('input[class="focus"]');
foco.addEventListener('focus', function (event) {
	console.log(`${event.type} executed. Value ${foco.value}`);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let valor = document.querySelector('input[class="value"]');
valor.addEventListener('input', function (event) {
	console.log(`${event.type} executed. Value ${valor.value}`);
});
