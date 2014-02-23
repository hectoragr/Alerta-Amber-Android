$(document).ready(function () {
	$(document).on('click','#btn-buscar-alerta', function () {
		console.log($('#form-buscar').serialize());
	});
});