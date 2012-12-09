$(document).on("ready", inicio);

	function inicio()
	{
		
		$("#personalicite").on("click", transicion);
		$(".llanta").on("click", cambiallanta);
	}
function cambiallanta(datos){
	var ll1 = datos.currentTarget.id;
	alert(ll1);
	$("#r1").load("llanta1.png");
	//$("#r1").html("Car 1");
}
function transicion()
{
	//Objeto JAVASCRIPT JSON
	var cambiosHistoria = {
		
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	}

	var cambiosPerson = {
		
		height: "auto",
		opacity: 1,
		
		width: "40%"
	}	
	$("#historia").css(cambiosHistoria);
	$("#personalizacion").css(cambiosPerson);
	$("#color div").on("click", cambiarColor)
}

function cambiarColor(datos){
	var col = datos.currentTarget.id;
	$("#cochecito img").attr("src", "c" + col + ".jpg")
	//alert (col);
	$("#textocolor").html("<strong>Color</strong> " + col);
	console.log(datos);
	
}