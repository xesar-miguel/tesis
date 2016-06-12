var intentos = 0;

$(function() {
	ValidaLogin();
	ConfigControles();
	CargaInicial();

	if ($('#j_intentos').val() == undefined || ($('#j_intentos').val() === '')){
		intentos = 0;
	}else{
		intentos = $('#j_intentos').val();
	}
	
	if (intentos < 3){
		$('#captchaId').css('display','none');
	}else{
		$('#captchaId').css('display','block');
	}
	
});

function ConfigControles() {
	$.get("http://ipinfo.io", function(response) {
		$('#ipLocal').val(response.ip);
	}, "jsonp");
}

function LanzarPop(msg) {
	$('#lblMsgPop').text(msg);
	$('#confirm').modal({
		backdrop : 'static',
		keyboard : false
	}).one('click', '[data-value]', function(e) {
		if ($(this).data('value')) {
			// alert('confirmed');
		} else {
			// alert('canceled');
		}
	});
}

function MostrarMensajeErr(name, msg, flag) {
	$('#lblAlert').text(msg);
	if (flag) {
		$('#' + name).show();
	} else {
		$('#' + name).hide();
	}
}

function ValidaLogin() {
	// generico para controles con campos vacios
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaCV", function(value, element) {
		if ($('.g-recaptcha-response').val() === '') {
			$('#msgC').attr('style', 'display:block');
			$('.g-recaptcha').attr('style', 'width: 305px; height: 79px;border: 2px solid #ef5282; border-radius: 4px;border-bottom-color: red;border-left-color: red;')
			$('cv').val('');

			MostrarMensajeErr('msgV', 'Verifique los siguientes errores:', true);
			return false;
		} else {
			$('#msgC').attr('style', 'display:none');
			$('.g-recaptcha').attr('style', '')
			$('cv').val($('.g-recaptcha').val());
			MostrarMensajeErr('msgV', 'Verifique los siguientes errores:', false);
			return true;
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

	// validacion de formulario inscripcion IPRESS
	$('#frmLogin').validate({
		ignore : "input[type='text']:hidden",
		rules : {
			usuario : {
				required : true,
				ValidaVacios : true
			},
			password : {
				required : true,
				ValidaVacios : true
			},
			cv : {
				ValidaCV : true
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

function CargaInicial() {
    cargarCaptcha();
    $("#txtUser").focus();
}

function cargarCaptcha() {
    var root = $("#hddContext").val();
    var imagen = document.getElementById("img-captcha");
    imagen.src = root + '/captcha.htm?action=obtenerImagen';
    
    if (imagen !== null) {
    	imagen.src = root + '/captcha.htm?action=obtenerImagen&' + Math.random();
    }
    
}

function comprobarImagen() {
	var sUser = $("#j_username").val();
    if (sUser=="" || sUser==null){                
        showMensaje( 'Mensaje', "Debe ingresar un usuario valido..." , function(){
        	$("#j_username").focus();
    	});
        return false;
    }
    var sPass = $("#j_password").val();
    if (sPass=="" || sPass==null){        
        showMensaje( 'Mensaje', "Debe ingresar contrase&ntilde;a..." , function(){
        	$("#j_password").focus();
    	});	                
        return false;
    }
    var sCodigo = $("#txtText").val();
    if ((sCodigo == "" || sCodigo == null) && intentos > 3) {
    	showMensaje( 'Mensaje', "Debe ingresar el texto de la imagen..." , function(){
    		cargarCaptcha();
            $("#txtText").focus();
    	});    	
        return false;
    }
    fu_HaceSubmitFormXML();
}

function  fu_HaceSubmitFormXML() {
	var root = $("#hddContext").val();
    var local_url = root + "/captcha.htm?action=comprobarCaptcha";

    var sCodigo = $("#txtText").val();
    if ((sCodigo == "" || sCodigo == null) && intentos > 3) {        
        showMensaje( 'Mensaje', "Debe ingresar el texto de la imagen..." , function(){
        	$("#txtText").focus();
    	});
        return false;
    }
    var lparams = "codigo=" + document.getElementById('txtText').value;
	
	beginCargando();
    $.ajax({
        url: local_url,
        type: 'POST',
        data: lparams,
        dataType: 'json',
        success: function(data) {
			endCargando();
            fu_pasaRespuesta(data);			
        }
    });
}
function conMayusculas() {
    document.getElementById("txtText").value = document.getElementById("txtText").value.toUpperCase();
}

function fu_pasaRespuesta(response) {

	if (intentos < 3){
		document.getElementById("frmLogin").submit();
	}else{
		if (response.dataJson.respuesta == 'true')
		{
			document.getElementById("frmLogin").submit();
		}
		else 
		{				
			showMensaje( 'Mensaje', "Caracteres equivocados" , function(){
				cargarCaptcha();
				document.getElementById("txtText").value = "";
			});
			return false;
		}
	}
    
    return true;

}

function seleccioneEncargatura() {
    //document.getElementById("txtText").value=document.getElementById("txtText").value.toUpperCase();
}

function seleccioneEntidad(coEnc, coPerfil) {
    document.getElementById("coPerfil").value = coPerfil;
    document.getElementById("coEnc").value = coEnc;
    document.getElementById("frmAjax").submit();
}

function seleccionePerfil(coEnc, coUsuario) {
    document.getElementById("coUsuario").value = coUsuario
    document.getElementById("coEnc").value = coEnc
    document.getElementById("frmAjax").submit();
}

function seleccionaEntidad(deRazonSocial, coEntidad) {

    document.getElementById("deRazon").value = deRazonSocial;
    document.getElementById("coEntidad").value = coEntidad;
    document.getElementById("frmAjax").submit();
}


function beginCargando(messsage){
		$.blockUI({
        	message: '<h1><img src="image/load.gif" />  ' + (messsage == null ? 'Cargando' : messsage) + '...</h1>',
            css: { 
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',                
                'font-size': '0.95em',
                opacity: .5,
                color: '#fff'              
            }
        });    	
	}
	
function endCargando(){
	$.unblockUI();   	
}