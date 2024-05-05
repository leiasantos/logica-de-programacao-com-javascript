
function desenhaQuadrado(x, y, cor){

	let tela = document.querySelector('canvas');
	let pincel = tela.getContext('2d');

	pincel.fillStyle = cor;
	pincel.fillRect(x, y, 50, 50);
	pincel.fillStroke = 'black';
	pincel.strokeRect(x, y, 50, 50);

}

let x = 0;

while(x < 600){

	desenhaQuadrado(x, 0, '#F675A8');
	x = x + 50;
	

}

