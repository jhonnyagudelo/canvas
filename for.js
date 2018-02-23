//variables para empezar

var texto = document.getElementById("texto_lineas");
var buton = document.getElementById("botoncito");
buton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

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

//Funcion boton

function dibujoPorClick()
{
	var lineas = parseInt(texto.value); //con este metodo capturo el valor de un imput en una variable
	//Ciclos
	var l = 0;
	var xi, yi, xf, yf, xnf, ynf;
	var colorcito = "#D932CF"
	var espacio = ancho/lineas;


	for (l = 0; l < lineas; l++)

	{

	//invocar función
	xi = espacio * l;
	ynf = espacio * l;
	yf = espacio * (l + 1);
	xnf = 300 - (l * espacio);

  dibujarLinea(colorcito, 0, xnf, xnf, 300);                               //esquina inferior izquierda
	dibujarLinea(colorcito, 300, xi, yf, 0);                              //esquina superior derecha
	dibujarLinea(colorcito, 300, xnf, ynf, 300);                         // esquina inferior derecha
	dibujarLinea(colorcito, 0, xnf, ynf, 0);                            // esquina superior izquierda
	// console.log ("lineas" + l);

	}



	//Dibujar cuadro
	dibujarLinea(colorcito, 1, 1, 1, 299);
	dibujarLinea(colorcito, 1, 299, 299, 299);
	dibujarLinea(colorcito, 299, 299, 299, 1);
	dibujarLinea(colorcito, 299, 1, 1, 1);

}



