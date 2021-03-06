var flagMsg = 0;
var flagMsgC = false;
$(function() {
	ValidaCambioClave();
	CargaInicial();
});

function MostrarMensajeErr(name, msg, flag) {
	$('#lblAlert').text(msg);
	if (flag) {
		$('#' + name).show();
	} else {
		$('#' + name).hide();
	}
}

function LanzarPop(msg) {
	$('#lblMsgPop').text(msg);
	$('#confirm').modal({
		backdrop : 'static',
		keyboard : false
	}).one('click', '[data-value]', function(e) {
		if ($(this).data('value')) {

		} else {

		}
	});
}

function LanzarPopRegistro(frm, msg) {
	$('#lblMsgPopRegistro').text(msg);
	$('#confirmRegistro').modal({ backdrop : 'static', keyboard : false }).one('click', '[data-value]', function(e) {
		if ($(this).data('value')) {
			$.ajax({
				method : "POST",
				url : "login.htm?action=valFrmRestableceClaveFinal",
				data : {
					rnd1 : $('#rnd1').val(),
					passwordNuevo : $('#passwordNuevo').val(),
					passwordConfirmado : $('#passwordConfirmado').val()
				}
			}).done(function(msg) {
				if (msg === "1") {
					LanzarPopCambioClave('Se ha registrado la nueva contraseña.');
				} else {
					LanzarPop('Estimado usuario, debe utilizar el último link de acceso que ha recibido en su correo.');
				}
			});
		}
	});
}

function LanzarPopCambioClave(msg) {
	$('#lblMsgPopCambioClave').text(msg);
	$('#confirmCambioClave').modal({ backdrop : 'static', keyboard : false }).one('click', '[data-value]', function(e) {
		if ($(this).data('value')) {
			location.href = "login.htm";
		}
	});
}

function ValidaCambioClave() {
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			MostrarMensajeErr('msgV', 'Verifique los siguientes errores:', true);

			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaC", function(value, element) {
		if ($('#passwordNuevo').val() === $("#passwordConfirmado").val() && $('#passwordNuevo').val().length > 3) {
			$("#divNuevaC").removeClass("has-error");
			$("#divConfirmar").removeClass("has-error");
			$("[for=passwordNuevo]").hide();
			$("[for=passwordConfirmado]").hide();
			MostrarMensajeErr('msgV', 'Verifique los siguientes errores:', false);

			return true;
		} else {
			if (($('#passwordNuevo').val() !== '' && $('#passwordConfirmado').val() === '') || ($('#passwordNuevo').val() === '' && $('#passwordConfirmado').val() !== '')) {
				MostrarMensajeErr('msgV', 'Verifique los siguientes errores:', true);
				return true;
			} else {
				MostrarMensajeErr('msgV', 'Verifique los siguientes errores:', true);
				return false;
			}
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
		if (value === '') {
			return false;
		}
		switch ($('#cboDocumento').val()) {
		case "1":
			if (value.length !== 8) {
				return false;
			} else {
				return true;
			}
			break;
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	$('#frmCambioClave').validate({
		submitHandler : function(form) {
			LanzarPopRegistro(form, '¿Está seguro que desea confirmar la nueva contraseña?')
		},
		rules : {
			passwordNuevo : {
				ValidaVacios : true
			},
			passwordConfirmado : {
				required : true,
				ValidaC : true
			},
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});
}