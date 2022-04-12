
var sections = new Array(6);
		sections[0]= "seccion";
		sections[1]= "servicios";
		sections[2]= "quienes";
		sections[3]= "porqueusa";
		sections[4]= "contacto";
		sections[5]= "visaextrangeros";

	//	sections[5]= "procesoCompra";


var  myWidth = 0;
var  myHeight = 0;

var cuenta =0;



const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.style.setProperty('--animate-duration', '6s');

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


window.onload= inicio();



function inicio () {


   alertSize();
//tengo el alto de la pantalla en la variable    myHeight
//tengo el ancho de la pantalla en la varibale   myWidth

//	animateCSS('.texto', 'zoomIn').then((message) => {


//  animateCSS('.texto', 'zoomOut');


//});

   fotosportada();

   setInterval(function(){
   var tipes = document.querySelectorAll(".tip");
   var posicionmuestra=0;

    for (var i = 0; i < tipes.length ; i++) {
    //	cualtip = cualtip+i;

    var estadotipe = tipes[i].style.display;

    if (estadotipe == "block") posicionmuestra = i+1;

    tipes[i].style.display = "none";

    }

    if (posicionmuestra == 5) posicionmuestra=0;

    tipes[posicionmuestra].style.display = "block";


   }, 4000);

 slideeffect();


}



function fotosportada () {
	const contenidofotos = document.querySelector("#seccion");

	contenidofotos.style.width = myWidth;
	var altocontenido = myHeight;
	var altototal=altocontenido+"px"; 
	contenidofotos.style.height = altototal;


	if(myWidth < 767){
		const anchofotos= document.querySelectorAll(".slider__img");

		anchofotos[0].style.width="100%";
		anchofotos[1].style.width="100%";
		anchofotos[2].style.width="100%";
		anchofotos[3].style.width="100%";

		anchofotos[0].style.marginLeft="0";
		anchofotos[1].style.marginLeft="0";
		anchofotos[2].style.marginLeft="0";
		anchofotos[3].style.marginLeft="0";

			contenidofotos.style.height = "auto";


	}else {

	
	}



}


function slideeffect () {

 const slider = document.querySelector("#slider");

 let sliderSection = document.querySelectorAll(".slider__section");

 let sliderSectionLast = sliderSection[sliderSection.length-1];
//para poner la ultima imagen al principio

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //coloco antes de comenzar el slider el ultimo elemento

function Next () {
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 2.0s";
	setTimeout(function () {
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 2000);
}

setInterval(function () {
Next()}, 5000);


}



function animacionportada () {

const element = document.querySelector('.texto1');
element.style.setProperty('--animate-duration', '2s');
element.style.setProperty('--animate-delay', '12s');
element.classList.add('animate__animated', 'animate__fadeIn'); 
element.addEventListener('animationend', () => {

	element.classList.add('animate__animated', 'animate__fadeOut'); 
}); 

}


function alertSize() {

	  if( typeof( window.innerWidth ) == 'number' ) {
	    //No-IE
	    myWidth = window.innerWidth;
	    myHeight = window.innerHeight;
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	    //IE 6+
	    myWidth = document.documentElement.clientWidth;
	    myHeight = document.documentElement.clientHeight;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	    //IE 4 compatible
	    myWidth = document.body.clientWidth;
	    myHeight = document.body.clientHeight;
	  }


	  		var display;
			var card_menu= document.getElementById("card_menu");
			display= card_menu.style.display;

			if(myWidth < 767){
				card_menu.style.display= "none";

				var tipes = document.querySelectorAll(".tip");

				tipes[0].style.marginTop= "15px";
				tipes[1].style.fontSize = '25px';
				tipes[1].style.marginTop= "8px";

				tipes[2].style.fontSize = '20px';
				tipes[2].style.marginTop= "6px";

				tipes[3].style.fontSize = '20px';
				tipes[3].style.marginTop= '6px';
			
				tipes[4].style.marginTop= "15px";



			}else if(myWidth > 767  && myWidth < 1400 ){

				var tipes = document.querySelectorAll(".tip");
				card_menu.style.display= "block";
				tipes[0].style.marginTop= "20px";
				tipes[1].style.marginTop= "35px";
				tipes[2].style.marginTop= "15px";
				tipes[3].style.marginTop= "15px";
				tipes[4].style.marginTop= "55px";

			var tirarentabilidad= document.getElementById("rentabilidad"); 
			var margensuperior= -myHeight*0.45;
			var margentotal=margensuperior+"px"; 
			tirarentabilidad.style.marginTop= margentotal;
			}else {

				var tipes = document.querySelectorAll(".tip");
				card_menu.style.display= "block";
				tipes[0].style.marginTop= "30px";
				tipes[1].style.marginTop= "28px";
				tipes[2].style.marginTop= "30px";
				tipes[3].style.marginTop= "30px";
				tipes[4].style.marginTop= "49px";

			var tirarentabilidad= document.getElementById("rentabilidad"); 
			var margensuperior= -myHeight*0.4;
			var margentotal=margensuperior+"px"; 
			tirarentabilidad.style.marginTop= margentotal;

				
			}

			var seccioncontacto= document.getElementById("servicios");
			seccioncontacto.style.display= "none";
			var seccioncontacto= document.getElementById("contacto");
			seccioncontacto.style.display= "none";
			var seccionporque= document.getElementById("porqueusa");
			seccionporque.style.display= "none";
			var seccionproceso= document.getElementById("procesoCompra");
			seccionproceso.style.display= "none"; 
			var seccionproceso= document.getElementById("visaextrangeros");
			seccionproceso.style.display= "none"; 

			var seccionproceso= document.getElementById("quienes");
			seccionproceso.style.display= "none"; 

	}

function displayMenu(){

			var display;
			var start, end;
			var card_menu= document.getElementById("card_menu");
			
			display= card_menu.style.display;

			if(display == "none"){
				card_menu.style.display= "block"
				
			}else{
				card_menu.style.display= "none"

			}
}



function navSection(nav){


  	if (myWidth < 767) {
		 	var card_menu= document.getElementById("card_menu");
			card_menu.style.display= "none"
		}

		for(var i=0; i<sections.length; i++){
			search= document.getElementById(sections[i]);
			const orejeta = sections[i]+"select";
			search.style.display= "none";
			document.getElementById(orejeta).style.color = "grey"	

			if(sections[i] == nav){

				console.log("valor de i: ", i);

         console.log("valor de nav: ", nav);


				search.style.display= "block";
				document.getElementById(orejeta).style.color = "black"	
			}
		}
	}

