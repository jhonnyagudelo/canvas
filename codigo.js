  //variables para empezar
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

//Ciclos
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#D932CF"

while(l < lineas)
{

	//invocar función
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	// console.log ("lineas" + l);
	l = l + 1;

}

	dibujarLinea(colorcito, 1, 1, 1, 299);
	dibujarLinea(colorcito, 1, 299, 299, 299);

//Funciones
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

	//dibujar
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}