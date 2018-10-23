$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf('index')>-1){
	 $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    responsive:true
	  });
	}
	 //Posts
	 if(window.location.href.indexOf('index')>-1){
		 let posts = [
		 {
		 	tittle: 'Prueba de titulo 1',
		 	date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
		 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus quis diam at commodo. Morbi eget metus nec lorem molestie faucibus. In iaculis metus non vehicula convallis. Phasellus dolor orci, fringilla non est at, commodo ultricies erat. Aliquam mi arcu, volutpat eu enim id, vestibulum blandit libero. Vivamus at porta enim. In laoreet turpis et mi elementum, eget lobortis purus sagittis. Duis hendrerit arcu ac tincidunt malesuada. Sed eu efficitur libero. Mauris ultricies a erat eu sagittis. Donec sollicitudin maximus tincidunt. Praesent ullamcorper ante id nibh consectetur pellentesque sagittis eget erat. Maecenas vitae massa vel purus dictum interdum.'
		 },
		{
		 	tittle: 'Prueba de titulo 2',
		 	date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
		 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus quis diam at commodo. Morbi eget metus nec lorem molestie faucibus. In iaculis metus non vehicula convallis. Phasellus dolor orci, fringilla non est at, commodo ultricies erat. Aliquam mi arcu, volutpat eu enim id, vestibulum blandit libero. Vivamus at porta enim. In laoreet turpis et mi elementum, eget lobortis purus sagittis. Duis hendrerit arcu ac tincidunt malesuada. Sed eu efficitur libero. Mauris ultricies a erat eu sagittis. Donec sollicitudin maximus tincidunt. Praesent ullamcorper ante id nibh consectetur pellentesque sagittis eget erat. Maecenas vitae massa vel purus dictum interdum.'
		 },
		 {
		 	tittle: 'Prueba de titulo 3',
		 	date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
		 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus quis diam at commodo. Morbi eget metus nec lorem molestie faucibus. In iaculis metus non vehicula convallis. Phasellus dolor orci, fringilla non est at, commodo ultricies erat. Aliquam mi arcu, volutpat eu enim id, vestibulum blandit libero. Vivamus at porta enim. In laoreet turpis et mi elementum, eget lobortis purus sagittis. Duis hendrerit arcu ac tincidunt malesuada. Sed eu efficitur libero. Mauris ultricies a erat eu sagittis. Donec sollicitudin maximus tincidunt. Praesent ullamcorper ante id nibh consectetur pellentesque sagittis eget erat. Maecenas vitae massa vel purus dictum interdum.'
		 },
		 {
		 	tittle: 'Prueba de titulo 4',
		 	date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
		 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus quis diam at commodo. Morbi eget metus nec lorem molestie faucibus. In iaculis metus non vehicula convallis. Phasellus dolor orci, fringilla non est at, commodo ultricies erat. Aliquam mi arcu, volutpat eu enim id, vestibulum blandit libero. Vivamus at porta enim. In laoreet turpis et mi elementum, eget lobortis purus sagittis. Duis hendrerit arcu ac tincidunt malesuada. Sed eu efficitur libero. Mauris ultricies a erat eu sagittis. Donec sollicitudin maximus tincidunt. Praesent ullamcorper ante id nibh consectetur pellentesque sagittis eget erat. Maecenas vitae massa vel purus dictum interdum.'
		 },
		 {
		 	tittle: 'Prueba de titulo 5',
		 	date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
		 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus quis diam at commodo. Morbi eget metus nec lorem molestie faucibus. In iaculis metus non vehicula convallis. Phasellus dolor orci, fringilla non est at, commodo ultricies erat. Aliquam mi arcu, volutpat eu enim id, vestibulum blandit libero. Vivamus at porta enim. In laoreet turpis et mi elementum, eget lobortis purus sagittis. Duis hendrerit arcu ac tincidunt malesuada. Sed eu efficitur libero. Mauris ultricies a erat eu sagittis. Donec sollicitudin maximus tincidunt. Praesent ullamcorper ante id nibh consectetur pellentesque sagittis eget erat. Maecenas vitae massa vel purus dictum interdum.'
		 }
		 ];

		posts.forEach((item, index)=>{
			let post =`<article class="post">
						<h2>${item.tittle}Titulo del articulo</h2>
						<span class="date">${item.date}Fecha de publicación</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer más</a>
					</article>`;
					console.log(post);
					$("#posts").append(post);
		});
}
	//Selector de tema
	let theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//Scroll subir en la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//login falso
	$("#login form").submit(function(){
		let form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	let form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		let about_parrafo = $("#about p");
		about_parrafo.html("<strong>Bienvenido, "+ form_name + "</strong>");
		about_parrafo.append("<a href ='#' id='logout'> Cerrar sesión </a>");

		$("#login form").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	//Acordeon
	if(window.location.href.indexOf('about')>-1){
		$("#acordeon").accordion();
	}


	//Reloj
	if(window.location.href.indexOf('reloj')>-1){

		setInterval(function(){

			let reloj = moment().format("h:mm:ss");
			$("#reloj").html(reloj);
		}, 1000);
		
	}

	//Validacion
	if(window.location.href.indexOf('contact')>-1){
		
		$("form input[name = 'date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrollToTopOnError: true
  		});
	}
});