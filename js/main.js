$( document ).ready(function(){

	//inicializacion de las clases de materialize

	 $(".button-collapse").sideNav();
	 $('.scrollspy').scrollSpy();

	//animaciones con  ScrollReveal
	window.sr = ScrollReveal({ reset: true });

	//---home
		sr.reveal('.logo', { duration: 2000 }, 50);
		sr.reveal('.red-social', { duration: 3000 }, 100);
	
	//---about
	sr.reveal('.imagen-about',{
		delay    : 200,
		easing   : 'ease-in-out',
		rotate   : { x: 0, y: 90, z: 90 }
	});
	
	//---work
	sr.reveal('#w-rails', {
		duration:3000,
		rotate: {y:90}
	});
	sr.reveal('#w-cake', {
		duration:3000,
		delay:500,
		rotate: {y:90}
	});
	sr.reveal('#w-unity', {
		duration:3000,
		delay:1000,
		rotate: {y:90}
	});
	sr.reveal('#w-boo', {
		duration:3000,
		delay:1500,
		rotate: {y:90}
	});
	sr.reveal('#w-mate', {
		duration:3000,
		delay:2000,
		rotate: {y:90}
	});
	sr.reveal('#w-kwon', {
		duration:3000,
		delay:2500,
		rotate: {y:90}
	});

//contact
	sr.reveal('.ing-contact' ,{
		duration:2500
	});

});