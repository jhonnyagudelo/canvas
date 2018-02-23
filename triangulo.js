var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

//funciones

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStile = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

//funcion del boton
function dibujoPorClick()
{
 var lineas = parseInt(texto.value);
 var l = 150
 var xi, yi, xf, yf, xnf, ynf;
 var colorcito = "#69C345";
 var espacio = ancho/lineas;

 for(l = 0; l < lineas; l++)

 {

  yi = 150;
  xf = espacio * (l+1);

  // dibujarLinea(colorcito, 150);
  dibujarLinea(colorcito, yi, 0, xf, 300);

 }

   //Dibujar cuadro
	dibujarLinea(colorcito, 1, 1, 1, 299);
	dibujarLinea(colorcito, 1, 299, 299, 299);
	dibujarLinea(colorcito, 299, 299, 299, 1);
	dibujarLinea(colorcito, 299, 1, 1, 1);

}

