function valida_envia() {
	var error = false;
	if (document.fvalida.ci.value.length == 0) {
		alert('Tiene que escribir su Carnet de Identidad');
		document.fvalida.ci.focus();
		error = true;
		// return false;
	} else {
		var erCI = /(^([0-9]{2,2}(0|1)([0-9]{1,1})(0|1|2|3)([0-9]{1,1})([0-9]{5,5}))|^)$/;
		if (!erCI.test(document.fvalida.ci.value)) {
			alert('No es un Carnet de Identidad valido');
			document.fvalida.ci.focus();
			error = true;
			// return false;
		}
	}

	if (document.fvalida.tel.value.length > 0) {
		var erTEL = /(^(7([1-9]{1,1})([0-9]{6,6}))|^)$/;
		if (!erTEL.test(document.fvalida.tel.value)) {
			alert('No es un Telefono valido');
			document.fvalida.tel.focus();
			error = true;
			// return false;
		}
	}

	if (document.fvalida.nombre.value.length == 0) {
		alert('Tiene que escribir su Nombre');
		document.fvalida.nombre.focus();
		error = true;
		// return false;
	} else {
		for (var i = document.fvalida.nombre.value.length - 1; i >= 0; i--) {
			if (!isNaN(document.fvalida.nombre.value[i])) {
				alert('El campo Nombre no puede contener numeros');
				document.fvalida.nombre.focus();
				error = true;
				// return false;
			}
		}
	}

	if (document.fvalida.pApellido.value.length == 0) {
		alert('Tiene que escribir su Primer Apellido');
		document.fvalida.pApellido.focus();
		error = true;
		// return false;
	} else {
		for (var i = document.fvalida.pApellido.value.length - 1; i >= 0; i--) {
			if (!isNaN(document.fvalida.pApellido.value[i])) {
				alert('El campo Primer Apellido no puede contener numeros');
				document.fvalida.pApellido.focus();
				error = true;
				// return false;
			}
		}
	}

	if (document.fvalida.sApellido.value.length == 0) {
		alert('Tiene que escribir su Segundo Apellido');
		document.fvalida.sApellido.focus();
		error = true;
		// return false;
	} else {
		for (var i = document.fvalida.sApellido.value.length - 1; i >= 0; i--) {
			if (!isNaN(document.fvalida.sApellido.value[i])) {
				alert('El campo Segundo Apellido no puede contener numeros');
				document.fvalida.sApellido.focus();
				error = true;
				// return false;
			}
		}
	}

	if (document.fvalida.email.value.length > 0) {
		var arroba = false;
		var punto = false;
		var j = 0;

		for (var i = 0; i < document.fvalida.email.value.length; i++) {
			if (document.fvalida.email.value[i] == '@') {
				arroba = true;
				j = i;
				break;
			}
		}

		for (var i = j; i < document.fvalida.email.value.length; i++) {
			if (document.fvalida.email.value[i] == '.') {
				punto = true;
				j = i;
				break;
			}
		}

		if (j == document.fvalida.email.value.length - 1) punto = false;

		if (!arroba || !punto) {
			alert('El campo correo es invalido');
			document.fvalida.email.focus();
			error = true;
			// return false;
		}
	}

	if (
		document.fvalida.calle.value.length == 0 ||
		document.fvalida.num.value.length == 0 ||
		document.fvalida.apto.value.length == 0 ||
		document.fvalida.esc.value.length == 0 ||
		document.fvalida.entre.value.length == 0 ||
		document.fvalida.y.value.length == 0 ||
		document.fvalida.repa.value.length == 0 ||
		document.fvalida.poblado.value.length == 0 ||
		document.fvalida.mun.value.length == 0 ||
		document.fvalida.cod0.value.length == 0 ||
		document.fvalida.prov.value.length == 0
	) {
		alert('Faltan datos por llenar en tu direccion particular');
		error = true;
		// return false;
	}

	var select = 0;
	var select1 = 0;

	if (document.fvalida.colorRadio[0].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.colorRadio[1].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.colorRadio[2].checked == true) {
		select = select + 1;
	}

	if (select == 0) {
		alert('Debes escoger tu color de Piel');
		error = true;
		// return false;
	}

	select = 0;

	if (document.fvalida.colorSexo[0].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.colorSexo[1].checked == true) {
		select = select + 1;
	}

	if (select == 0) {
		alert('Debes escoger tu sexo');
		error = true;
		// return false;
	}

	select = 0;

	if (document.fvalida.ipu.checked == true) {
		select = select + 1;
		select1 = select1 + 1;
	}
	if (document.fvalida.poli.checked == true) {
		select = select + 1;
		select1 = select1 + 1;
	}
	if (document.fvalida.foc.checked == true) {
		select = select + 1;
		select1 = select1 + 1;
	}
	if (document.fvalida.otro.checked == true) {
		select = select + 1;
	}
	if (select == 0) {
		alert('Faltan datos por llenar en tu Procedencia');
		error = true;
		// return false;
	}

	if (select > 1) {
		alert('No puedes proceder de varias Enseñanzas');
		error = true;
		// return false;
	}

	if (document.fvalida.otro.checked == true) {
		if (document.fvalida.otroV.value.length == 0) {
			alert('Si ha elegido otra procedencia debe escribir el dato');
			document.fvalida.OtroV.focus();

			error = true;
			// return false;
		}
	}

	if (select1 > 0) {
		if (document.fvalida.otroV.value.length > 0) {
			alert('No puedes rellenar el campo de otra procedencia si no lo tienes marcado');
			document.fvalida.OtroV.focus();

			error = true;
			// return false;
		}
	}

	select = 0;

	if (document.fvalida.ocupacionRadio[0].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[1].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[2].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[3].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[4].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[5].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[6].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[7].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.ocupacionRadio[8].checked == true) {
		select = select + 1;
	}

	if (select == 0) {
		alert('Debes seleccionar alguna ocupacion');
		error = true;
		// return false;
	}

	select = 0;

	if (document.fvalida.vinculaRadio[0].checked == true) {
		select = select + 1;
	}
	if (document.fvalida.vinculaRadio[1].checked == true) {
		select = select + 1;
	}

	if (select == 0) {
		alert('Debes seleccionar si tu ocupacion se vincula a la carrera deseada');
		error = true;
		// return false;
	}

	select = 0;

	if (document.fvalida.sectorRadio[0].checked == true) {
		select = select + 1;
	}

	if (document.fvalida.sectorRadio[1].checked == true) {
		select = select + 1;
	}

	if (document.fvalida.sectorRadio[2].checked == true) {
		select = select + 1;
	}

	if (document.fvalida.sectorRadio[3].checked == true) {
		select = select + 1;
	}

	if (select == 0) {
		alert('Debes seleccionar el sector laboral al que perteneces');
		error = true;
		// return false;
	}

	select = 0;
	select1 = 0;

	if (error) {
		alert('Por favor llene todos los campos pendientes');
		return false;
	} else {
		alert('El proceso de enviar una Planilla se a realizado con exito');
		return true;
	}
}
