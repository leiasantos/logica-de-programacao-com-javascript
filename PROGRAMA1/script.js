
let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = '#9ED2C6';
pincel.fillRect(0, 0, 600, 400);


pincel.fillStyle = "#3120E0";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "#F65A83";
pincel.fillRect(400, 0, 200, 400);


pincel.fillStyle = "#7DCE13"
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();


pincel.fillStyle="#EAE509";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();
