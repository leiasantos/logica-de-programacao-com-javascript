let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = '#0096FF';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento){
	
	let x = evento.pageX - tela.offsetLeft;
	let y = evento.pageY - tela.offsetTop;
	pincel.fillStyle = '#EF5B0C';
	pincel.beginPath();
	pincel.arc(x, y, 10, 0, 2 * 3.14);
	pincel.fill();

	console.log(x + ' , ' + y );

}

tela.onclick = desenhaCirculo;