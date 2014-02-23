$(document).ready(function () {
	$(document).on('click','#btn-save-config', function () {
		console.log($('#form-configuracion').serialize());
	});
});